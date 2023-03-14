import { previewData } from "next/headers";
import { groq } from "next-sanity";
import { client } from "../../lib/sanity.client";
import PreviewSuspanse from "../../components/PreviewSuspanse";
import PreviewBlogList from "../../components/PreviewBlogList"
import BlogList from "../../components/BlogList";
const query = groq`
*[_type=='post'] 
{
    ...,
    author->,
    categories[]->
} | order(createAt desc)
`;

export default async function Page() {
  if (previewData()) {
    return (
      <PreviewSuspanse
        fallback={(
          <div role="status">
            <p className=" text-center"> Loading Preview data....</p>
          </div>
        )}>
        <PreviewBlogList query={query} />
      </PreviewSuspanse>
    )
  }
  const posts = await client.fetch(query);

  return (<BlogList posts={posts} />);
}
