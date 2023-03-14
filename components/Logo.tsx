import Image from "next/image";

function Logo(props: any) {
    const{renderDefault, title } = props;
  return (
    <div className=" flex items-center space-x-2">
        <Image
        className="rounded-full object-cover"
        height={80}
        width={80}
        src="/634-Properties_Logo-File_Full-Color.png"
        alt="logo"
        />
        {renderDefault && <>{renderDefault(props)}</>}
    </div>
  )
}

export default Logo