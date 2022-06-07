import Card from ".";
import { TestimonialCardArray } from "../../data";

const TestimonialCardGrid = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6">
      {TestimonialCardArray.map((card, index) => (
        <Card
          key={index}
          testimonials
          statement={card.statement}
          name={card.name}
          position={card.position}
        />
      ))}
    </div>
  );
};

export default TestimonialCardGrid;
