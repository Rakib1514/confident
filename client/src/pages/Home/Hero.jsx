import Card from "../../components/Card";

const Hero = () => {
  const fakeData = [
    {
      title: "JavaScript",
      path: "/",
      type: "Private",
      thumbnail:
        "https://university.cactusthemes.com/wp-content/uploads/2015/08/DFC_71879331-chicago-river-cruise-554x674.jpg",
      totalQA: 78,
      L1: 20,
      L2: 20,
      L3: 38,
    },
    {
      title: "Html",
      path: "/",
      type: "Private",
      thumbnail:
        "https://university.cactusthemes.com/wp-content/uploads/2015/08/iStock_000027500935_Large-554x674.jpg",
      totalQA: 78,
      L1: 20,
      L2: 25,
      L3: 38,
    },
    {
      title: "JavaScript",
      path: "/",
      type: "Private",
      thumbnail:
        "https://university.cactusthemes.com/wp-content/uploads/2015/08/DFC_71879331-chicago-river-cruise-554x674.jpg",
      totalQA: 78,
      L1: 20,
      L2: 235,
      L3: 38,
    },
    {
      title: "Html",
      path: "/",
      type: "Private",
      thumbnail:
        "https://university.cactusthemes.com/wp-content/uploads/2015/08/iStock_000027500935_Large-554x674.jpg",
      totalQA: 78,
      L1: 20,
      L2: 20,
      L3: 38,
    },
    {
      title: "JavaScript",
      path: "/",
      type: "Private",
      thumbnail:
        "hps://university.cactusthemes.com/wp-content/uploads/2015/08/DFC_71879331-chicago-river-cruise-554x674.jpgtt",
      totalQA: 78,
      L1: 20,
      L2: 20,
      L3: 38,
    },
    {
      title: "Html",
      path: "/",
      type: "Private",
      thumbnail:
        "https://university.cactusthemes.com/wp-content/uploads/2015/08/iStock_000027500935_Large-554x674.jpg",
      totalQA: 78,
      L1: 20,
      L2: 20,
      L3: 38,
    },
    {
      title: "Html",
      path: "/",
      type: "Private",
      thumbnail:
        "https://university.cactusthemes.com/wp-content/uploads/2015/08/DFC_71879331-chicago-river-cruise-554x674.jpg",
      totalQA: 78,
      L1: 20,
      L2: 20,
      L3: 38,
    },
  ];

  return (
    <div className="bg-gradient-to-br from-g1 to-primary min-h-screen mt-12 py-16">
      <div className="w-10/12 mx-auto grid grid-cols-4 ">
        <div className={`h-full w-full bg-primary p-6`}>
          <p className=" text-white text-5xl font-bitter">
            Be <br /> confident
          </p>
        </div>
        {fakeData.map((sub, idx) => (
          <Card key={idx} sub={sub} />
        ))}
      </div>
    </div>
  );
};

export default Hero;
