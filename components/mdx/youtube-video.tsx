import { cn } from "@/lib/utils";

type YouTubeVideoProps = {
  id: string;
  /**
   * Optional query string appended to the embed URL.
   * Examples:
   * - "start=90"
   * - "list=PLxxxx"
   * - "list=PLxxxx&start=90"
   * You may also pass it with a leading "?" (we'll strip it).
   */
  params?: string;
};

export function YouTubeVideo({ id, className, ...props }: YouTubeVideoProps & React.HTMLAttributes<HTMLIFrameElement>) {
  const query = typeof props.params === "string" ? props.params.trim().replace(/^\?/, "") : "";
  const src = query ? `https://www.youtube.com/embed/${id}?${query}` : `https://www.youtube.com/embed/${id}`;
  // prevent passing `params` down to the <iframe> element
  // eslint-disable-next-line no-unused-vars
  const { params, ...iframeProps } = props as any;

  return (
    <div className={cn("mx-auto aspect-video", className)}>
      <iframe
        className="h-full w-full"
        src={src}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        {...iframeProps}
      ></iframe>
    </div>
  );
}
