import Image1 from "../assets/images/photo_1@2x.png";
import Image2 from "../assets/images/photo_2@2x.png";
import Image3 from "../assets/images/photo_3@2x.png";

const Cards = () => {

  const data = [
    {
      id: 101,
      icon: "✋", 
      iconBgColor: "bg-light-yellow",
      title: "Collect Feedback at Multiple Touchpoints",
      description: "Provide a comprehensive understanding of the customer experience.",
      image: Image1,
      imageAlt: "3 men having conversation"
    },
    {
      id: 102,
      icon: "🥅",
      iconBgColor: "bg-salmon",
      title: "Ask Targeted and Specific Questions",
      description: "Avoid vague or open-ended questions that may not yield actionable insights.",
      image: Image2,
      imageAlt: "4 men having conversation"
    },
    {
      id: 103,
      icon: "💬",
      iconBgColor: "bg-sky-blue",
      title: "Prioritize and Respond to Feedback",
      description: "Communicate the changes or improvements you've made in response to their feedback.",
      image: Image3,
      imageAlt: "A man holding a mic"
    },
  ]

  return (
    <div className="flex flex-wrap gap-12 justify-center">
      {
        data.map(d => <Card data={d} key={d.id} />)
      }
    </div>
  );
}

const Card = ({data}) => {
  return (
    <article className="max-w-xs bg-accent p-6 rounded-2xl">
      <div className={`w-12 h-12 text-center leading-[48px] text-xl rounded-full inline-block mb-6 ${data.iconBgColor}`}>{data.icon}</div>
      <h3 className="small-heading text-off-white mb-4">{data.title}</h3>
      <p className="text-body text-gray mb-3 h-18">{data.description}</p>
      <img src={data.image} alt={data.imageAlt} className="w-full rounded-xl" />
    </article>
  );
}

export default Cards;