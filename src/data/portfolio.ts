import workWeb1 from "@/assets/work-web1.jpg";
import workWeb2 from "@/assets/work-web2.jpg";
import workLogo1 from "@/assets/work-logo1.jpg";
import workLogo2 from "@/assets/work-logo2.jpg";
import workLogo3 from "@/assets/work-logo3.jpg";
import workEdu1 from "@/assets/work-edu1.jpg";
import workEdu2 from "@/assets/work-edu2.jpg";
import workEdu3 from "@/assets/work-edu3.jpg";
import workSocial1 from "@/assets/work-social1.jpg";
import workMontage from "@/assets/work-montage.jpg";
import workRestaurant from "@/assets/work-restaurant.jpg";

export type PortfolioItem = { src: string; title: string; tag: string };

export const PORTFOLIO = {
  web: {
    title: "تصميم وبرمجة المواقع",
    subtitle: "مواقع ومتاجر إلكترونية واحترافية بأحدث التقنيات",
    sections: [
      {
        title: "مواقع إلكترونية",
        items: [
          { src: workWeb1, title: "متجر إلكتروني", tag: "E-Commerce" },
          { src: workWeb2, title: "أكاديمية تعليمية", tag: "Education" },
          { src: workWeb1, title: "موقع شركة", tag: "Corporate" },
        ] as PortfolioItem[],
      },
      {
        title: "متاجر إلكترونية",
        items: [
          { src: workWeb1, title: "متجر أزياء", tag: "Fashion" },
          { src: workWeb2, title: "متجر إلكترونيات", tag: "Tech" },
        ] as PortfolioItem[],
      },
      {
        title: "مصادر تعليمية",
        items: [
          { src: workWeb2, title: "منصة تعليمية", tag: "LMS" },
          { src: workEdu1, title: "كتاب رقمي", tag: "E-Book" },
        ] as PortfolioItem[],
      },
    ],
  },
  design: {
    title: "التصميم والمونتاج",
    subtitle: "أعمال تصميم بصرية ومونتاج بإحساس سينمائي",
    sections: [
      {
        title: "تصاميم دراسية",
        items: [
          { src: workEdu1, title: "أغلفة كتب دراسية", tag: "Books" },
          { src: workEdu2, title: "شهادات تقدير", tag: "Certificates" },
          { src: workEdu3, title: "كتب إلكترونية", tag: "E-Books" },
        ] as PortfolioItem[],
      },
      {
        title: "لوجوهات",
        items: [
          { src: workLogo1, title: "لوجو مطعم", tag: "Restaurants" },
          { src: workLogo2, title: "لوجو جيمنج", tag: "Gaming" },
          { src: workLogo3, title: "لوجو مؤسسة", tag: "Institutions" },
        ] as PortfolioItem[],
      },
      {
        title: "مطاعم وعلامات تجارية",
        items: [
          { src: workRestaurant, title: "هوية مطعم كاملة", tag: "Branding" },
          { src: workLogo1, title: "تصميم منيو", tag: "Menu Design" },
        ] as PortfolioItem[],
      },
      {
        title: "مونتاج فيديو",
        items: [{ src: workMontage, title: "مونتاج سينمائي", tag: "Video" }] as PortfolioItem[],
      },
    ],
  },
  social: {
    title: "خدمات السوشيال ميديا",
    subtitle: "حملات زيادة متابعين وتفاعل ناجحة",
    sections: [
      {
        title: "حملات سوشيال ميديا",
        items: [
          { src: workSocial1, title: "حملة انستجرام", tag: "Instagram" },
          { src: workSocial1, title: "حملة تيكتوك", tag: "TikTok" },
          { src: workSocial1, title: "حملة فيسبوك", tag: "Facebook" },
        ] as PortfolioItem[],
      },
    ],
  },
  management: {
    title: "إدارة الصفحات والتسويق",
    subtitle: "هويات بصرية ومحتوى وخطط تسويقية متكاملة",
    sections: [
      {
        title: "إدارة صفحات",
        items: [
          { src: workSocial1, title: "إدارة محتوى شامل", tag: "Content" },
          { src: workRestaurant, title: "هوية بصرية كاملة", tag: "Identity" },
        ] as PortfolioItem[],
      },
      {
        title: "حملات إعلانية",
        items: [
          { src: workSocial1, title: "حملة ممولة", tag: "Ads" },
          { src: workMontage, title: "إعلان فيديو", tag: "Video Ads" },
        ] as PortfolioItem[],
      },
    ],
  },
} as const;

export type PortfolioKey = keyof typeof PORTFOLIO;
