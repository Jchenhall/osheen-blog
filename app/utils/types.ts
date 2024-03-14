export type Post = {
  author: { name: string; avatar: { id: string; url: string } };
  coverPhoto: { createdBy: { id: string }; url: string };
  content: { html: string; markdown: string; text: string; raw: string };
  id: string;
  datePublished: string;
  slug: string;
  title: string;
  updatedAt: string;
};
