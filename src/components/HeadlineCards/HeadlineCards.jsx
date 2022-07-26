import React from "react";

import Card from "./Card";

const HeadlineCards = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
      {/*Featured Cards */}
      <Card
        bgImgSource={
          "https://images.pexels.com/photos/247114/pexels-photo-247114.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
        title={"Rounded Chinese Design"}
        price={69}
      />
      <Card
        bgImgSource={
          "https://images.pexels.com/photos/790104/pexels-photo-790104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
        title={"Light Up Darkest Nights"}
        price={99}
      />
      <Card
        bgImgSource={
          "https://images.pexels.com/photos/751099/pexels-photo-751099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
        title={"Rainbow Colored Beauty"}
        price={139}
      />
    </div>
  );
};

export default HeadlineCards;
