/*
 * @Description: Rui's codes.
 * @Author: Qian Rui rqian20@fudan.edu.cn
 * @version: 1.0
 * @Date: 2025-09-25 09:26:25
 * @LastEditors: Qian Rui rqian20@fudan.edu.cn
 * @LastEditTime: 2025-09-25 16:34:22
 */
import { AuthorType, SiteMetaData } from "@/types";

import { socialProfiles } from "./social-data";

export const BASE_URL =
  `https://${process.env.VERCEL_URL}` ||
  process.env.NEXT_PUBLIC_BASE_URL ||
  `http://localhost:${process.env.PORT || 3000}`;

export const defaultAuthor: AuthorType = {
  name: "Ray Qian",
  handle: "@CherryRayee",
  socialProfiles,
  email: "eleanor_chien@foxmail.com",
  website: "https://cherryrayee.com",
  jobTitle: "Robotics Engineer",
  company: "Fudan University",
  availableForWork: true,
  location: {
    city: "Shanghai",
    media: "/losangeles.jpg",
  },
};

const defaultTitle = `${defaultAuthor.name}'s Blog`;
const defaultDescription = `I'm ${defaultAuthor.name}. ὁδὸς ἄνω κάτω μία καὶ ὡυτή`;

const siteMetadata: SiteMetaData = {
  title: {
    template: `%s | ${defaultTitle}`,
    default: defaultTitle,
  },
  description: defaultDescription,
  siteRepo: "https://github.com/thedevdavid/digital-garden",
  newsletterProvider: "mailerlite",
  newsletterUrl: "https://developreneur.davidlevai.com",
  analyticsProvider: "umami",
  defaultTheme: "system",
  activeAnnouncement: false,
  announcement: {
    buttonText: "Support on DevHunt →",
    link: "https://devhunt.org/tool/modern-developer-blog-template-digital-garden-starter",
  },
  postsPerPage: 10,
  postsOnHomePage: 8,
  projectsOnHomePage: 4,
};

export default siteMetadata;
