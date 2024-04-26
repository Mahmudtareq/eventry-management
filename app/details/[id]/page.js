import EventDetails from "@/components/details/EventDetails";
import EventVenue from "@/components/details/EventVenue";
import HeroSection from "@/components/details/HeroSection";
import { getEventById } from "@/db/queries";

const EventDetailsPage = async ({ params: { id } }) => {
  const event = await getEventById(id);
  return (
    <div>
      <HeroSection event={event} />
      <section className="container">
        <div className="grid grid-cols-5 gap-12 my-12">
          <EventDetails event={event} />
          <EventVenue event={event} />
        </div>
      </section>
    </div>
  );
};

export default EventDetailsPage;
