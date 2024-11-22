import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Instagram, Facebook, Youtube } from 'lucide-react'

const socialMediaPosts = [
  {
    platform: "instagram",
    content: "Exploring the mystical world of astrology! 🔮✨ #AstrologyInsights",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    platform: "facebook",
    content: "Join us for our upcoming webinar on Vedic Astrology basics!",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    platform: "youtube",
    content: "New video: Understanding Your Birth Chart",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
]

export function SocialMediaFeed() {
  return (
    <Tabs defaultValue="all" className="w-full">
      <TabsList className="grid w-full grid-cols-4 mb-4">
        <TabsTrigger value="all">All</TabsTrigger>
        <TabsTrigger value="instagram">
          <Instagram className="w-4 h-4 mr-2" />
          Instagram
        </TabsTrigger>
        <TabsTrigger value="facebook">
          <Facebook className="w-4 h-4 mr-2" />
          Facebook
        </TabsTrigger>
        <TabsTrigger value="youtube">
          <Youtube className="w-4 h-4 mr-2" />
          YouTube
        </TabsTrigger>
      </TabsList>
      <TabsContent value="all">
        <div className="grid gap-4 md:grid-cols-3">
          {socialMediaPosts.map((post, index) => (
            <SocialMediaCard key={index} {...post} />
          ))}
        </div>
      </TabsContent>
      {["instagram", "facebook", "youtube"].map((platform) => (
        <TabsContent key={platform} value={platform}>
          <div className="grid gap-4 md:grid-cols-3">
            {socialMediaPosts
              .filter((post) => post.platform === platform)
              .map((post, index) => (
                <SocialMediaCard key={index} {...post} />
              ))}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  )
}

function SocialMediaCard({ platform, content, image, video }: {
  platform: string
  content: string
  image?: string
  video?: string
}) {
  return (
    <Card>
      <CardContent className="p-4">
        {video ? (
          <div className="aspect-video mb-4">
            <iframe
              src={video}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        ) : (
          image && (
            <img src={image} alt={`${platform} post`} className="w-full h-48 object-cover mb-4 rounded-md" />
          )
        )}
        <p className="text-sm text-gray-600">{content}</p>
      </CardContent>
    </Card>
  )
}

