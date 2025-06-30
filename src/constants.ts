import type { Props } from "astro";
import IconWeChat from "@/assets/icons/IconWeChat.svg";
import IconXiaohongshu from "@/assets/icons/IconXiaohongshu.svg";
import IconMail from "@/assets/icons/IconMail.svg";
import IconBrandX from "@/assets/icons/IconBrandX.svg";
import IconWhatsapp from "@/assets/icons/IconWhatsapp.svg";
import IconFacebook from "@/assets/icons/IconFacebook.svg";
import IconTelegram from "@/assets/icons/IconTelegram.svg";
import IconSinaWeibo from "@/assets/icons/IconSinaWeibo.svg";
import IconPinterest from "@/assets/icons/IconPinterest.svg";
import { SITE } from "@/config";

interface Social {
  name: string;
  href: string;
  linkTitle: string;
  icon: (_props: Props) => Element;
}

export const SOCIALS: Social[] = [
  {
    name: "WeChat",
    href: "#", // Replace with your WeChat QR code image link or a page with the QR code
    linkTitle: `${SITE.title} on WeChat`,
    icon: IconWeChat,
  },
  {
    name: "Xiaohongshu",
    href: "#", // Replace with your Xiaohongshu profile link
    linkTitle: `${SITE.title} on Xiaohongshu`,
    icon: IconXiaohongshu,
  },
  {
    name: "SinaWeibo",
    href: "#", // Replace with your Sina Weibo profile link
    linkTitle: `${SITE.title} on Sina Weibo`,
    icon: IconSinaWeibo,
  },
] as const;

export const SHARE_LINKS: Social[] = [
  {
    name: "WhatsApp",
    href: "https://wa.me/?text=",
    linkTitle: `Share this post via WhatsApp`,
    icon: IconWhatsapp,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/sharer.php?u=",
    linkTitle: `Share this post on Facebook`,
    icon: IconFacebook,
  },
  {
    name: "X",
    href: "https://x.com/intent/post?url=",
    linkTitle: `Share this post on X`,
    icon: IconBrandX,
  },
  {
    name: "Telegram",
    href: "https://t.me/share/url?url=",
    linkTitle: `Share this post via Telegram`,
    icon: IconTelegram,
  },
  {
    name: "Pinterest",
    href: "https://pinterest.com/pin/create/button/?url=",
    linkTitle: `Share this post on Pinterest`,
    icon: IconPinterest,
  },
  {
    name: "Mail",
    href: "mailto:?subject=See%20this%20post&body=",
    linkTitle: `Share this post via email`,
    icon: IconMail,
  },
] as const;
