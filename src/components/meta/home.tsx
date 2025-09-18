import { usePathname } from "next/navigation";

export const MetaOg = ({
  bg,
  title,
  description,
  width,
  height,
  url,
}: {
  bg?: string;
  title?: string;
  description?: string;
  width?: string;
  height?: string;
  url?: string;
}) => {
  const pathname = usePathname()
  return (
    <>
      <meta property="og:title" content={title ?? "Tokhiruulga.mn"} />
      <meta
        property="og:description"
        content={description ?? "Гэрэлт Цох Байшин ТББ"}
      />

      <meta
        property="og:image"
        content={"http://tokhiruulga.mn/assets/bg.png"}
      />
      <meta property="og:image:width" content={width ?? "1200"} />
      <meta property="og:image:height" content={height ?? "630"} />
      <meta property="og:url" content={pathname ?? "http://tokhiruulga.mn"} />
    </>
  );
};
