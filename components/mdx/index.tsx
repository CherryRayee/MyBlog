import NextImage, { ImageProps } from "next/image";
import Link from "next/link";
import { useMDXComponent } from "next-contentlayer/hooks";
import type { TweetProps } from "react-tweet";
import { Tweet } from "react-tweet";

import { AbstractBox } from "./abstract-box";
import { Citation, Reference, ReferenceList } from "./citation";
import { NewsletterCTA } from "./newsletter-cta";
import { TextJustified } from "./text-justified";
import { YouTubeVideo } from "./youtube-video";

function CustomLink(props: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const { href } = props;
  const isExternalLink = href && href.startsWith("http");

  if (isExternalLink) {
    return <a target="_blank" href={href} rel="noopener noreferrer" {...props} />;
  }
  return (
    //@ts-expect-error
    <Link href={href} />
  );
}

const components = {
  Image: (props: ImageProps) => <NextImage {...props} />,
  AbstractBox,
  Citation,
  Reference,
  ReferenceList,
  NewsletterCTA,
  TextJustified,
  YouTubeVideo,
  // a: CustomLink,
  Tweet: (props: TweetProps) => {
    return (
      <div className="not-prose [&>div]:mx-auto">
        <Tweet {...props} />
      </div>
    );
  },
};

interface MdxProps {
  code: string;
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);
  // TODO: Figure out how to type this
  return <Component components={components as any} />;
}
