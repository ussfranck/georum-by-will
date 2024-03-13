import Link from "next/link";

export const SpotlightCard = function () {
  return (
    <div className="grid">
      <Link href={"/"}>
        <div></div>
      </Link>
      <div>
        <h4>Title</h4>
        <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</span>
      </div>
    </div>
  );
}