import { Post } from "../typings";
import Image from "next/image";
import urlFor from "../lib/urlFor";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import ClientSideRoute from "./ClientSideRoute";
type Props = {
    posts: Post[];
};
function BlogList({ posts }: Props) {
    return (
        <div>
            <hr />
            <div className="grid grid-cols-1 md:grid-cols-2 px-10 mt-10 gap-10 gap-y-16 pb-24">
                {/* Posts */}
                {posts.map((post) => (
                    <ClientSideRoute key={post._id} route={`/post/${post.slug.current}`}>
                        <div
                            className='group  cursor-pointer flex flex-col '>
                            <div className="relative w-full h-80 drop-shadow-2xl
                             group-hover:scale-105 transition-transform duration-200 ease-out
                            ">
                                <Image
                                    className="object-cover rounded-3xl object-left lg:object-center"
                                    src={urlFor(post.mainImage).url()}
                                    alt={post.author.name}
                                    fill
                                />
                                <div className="absolute rounded-3xl bottom-0 w-full bg-opacity-20 bg-black backdrop-blur-lg  drop-shadow-lg text-white p-5 flex justify-between">
                                    <div>
                                        <p className="font-bold
                                        ">
                                            {post.title}
                                        </p>
                                        <p>
                                            {new Date(post._createdAt).toLocaleDateString
                                                ("en-US", {
                                                    day: "numeric",
                                                    month: "long",
                                                    year: "numeric",
                                                })
                                            }
                                        </p>
                                    </div>
                                    <div>
                                        {post.categories.map(category => (
                                            <div className="bg-yellow-500 text-center text-black px-3 py-1 rounded-full text-sm font-semibold">
                                                <p> {category.title}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className=" mt-1 flex-1">
                            </div>
                            <p className="ml-3 mt-1 font-bold flex items-center group-hover:underline">
                                Look at listing
                                <ArrowRightIcon className=" ml-2 h-4 w-4" />
                            </p>
                        </div>
                    </ClientSideRoute>

                )
                )}
            </div>
        </div>
    );
}

export default BlogList