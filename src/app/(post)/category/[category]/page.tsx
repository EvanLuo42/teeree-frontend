'use client'

import {Megaphone} from "lucide-react";
import {Alert, AlertDescription, AlertTitle} from "@/components/ui/alert";
import {PostPreview, Preview} from "@/components/post-preview";
import { Breadcrumb, BreadcrumbList, BreadcrumbLink, BreadcrumbItem, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

interface CategoryParams {
  category: string
}

interface CategoryProps {
  params: CategoryParams
}

export default function CategoryPage({ params }: CategoryProps) {
  const category = "闲聊"

  const posts: Array<PostPreview> = [
    {
      category: '闲聊',
      id: '1237847',
      cookie: 'ejAif83',
      time: new Date(2024, 3, 5, 8, 24, 0),
      content: `
        两，两斤土豆，炖肉吃，一大盆，不就米饭，碾碎了往嘴里kuai着吃的，感觉自己像头活猪 
        (\`ᝫ´ )
        蛋白质，碳水，脂肪大集合，罪过罪过，又要胖三斤了……
      `,
      repliesCount: 5
    }
  ]

  function postPreviews(posts: Array<PostPreview>) {
    return posts.map((post: PostPreview) => (
      <Preview key={post.id} post={post}></Preview>
    ))
  }

  return (
    <>
      <div className="flex-2 flex-col space-y-2 w-full h-[calc(100vh_-_64px)] overflow-y-scroll pt-5 pl-20 pr-20 xl:pl-44 xl:pr-44"> 
      <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbLink href="/">
              <BreadcrumbItem>主页</BreadcrumbItem>
            </BreadcrumbLink>
            <BreadcrumbSeparator />
            <BreadcrumbLink href={`/category/${params.category}`}>
              <BreadcrumbItem>{category}</BreadcrumbItem>
            </BreadcrumbLink>
          </BreadcrumbList>
        </Breadcrumb>
        <Alert>
          <Megaphone className="w-5"></Megaphone>
          <AlertTitle>板块公告</AlertTitle>
          <AlertDescription>
            ABC
          </AlertDescription>
        </Alert>

        {postPreviews(posts)}
      </div>
    </>
  )
}