import { createFileRoute } from "@tanstack/react-router";
import Banner from "./-components/BannerWithForm";
import SearchBar from "./-components/SearchBar";
import FeaturedInstitutions from "./-components/FeaturedInstitutions";
import FeaturedDestinations from "./-components/FeaturedDestinations";
import FeaturedCourses from "./-components/FeaturedCourses";
import ConnectSection from "./-components/ConnectSection";
import HowItWorkForUs from "./-components/HowItWork";
import "@/old.css";
export const Route = createFileRoute("/home/")({
  component: RouteComponent,
});

function RouteComponent() {
  const bgImageUrl =
    "https://res.cloudinary.com/greenmouse-tech/image/upload/v1750802183/feshia%20Images/6722f625c6344416c1d2d5cdb77f842a_dyvvfz.jpg";
  const leftImageUrl =
    "https://res.cloudinary.com/greenmouse-tech/image/upload/v1750852319/feshia%20Images/Group_1171275186_1_kgiz4s.jpg";
  const rightImageUrl =
    "https://res.cloudinary.com/greenmouse-tech/image/upload/v1750807084/feshia%20Images/6a044f99c07d20f2804a5eb062290b4a-removebg-preview_1_1_vrj3vy.png";
  return (
    <>
      <Banner />
      <SearchBar bgImageUrl={bgImageUrl} />
      <div className="">
        <HowItWorkForUs />

        <FeaturedInstitutions />
        <FeaturedDestinations />
        <ConnectSection
          leftImageUrl={leftImageUrl}
          rightImageUrl={rightImageUrl}
        />
        <FeaturedCourses />
      </div>
    </>
  );
}
