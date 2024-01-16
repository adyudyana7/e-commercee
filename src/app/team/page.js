import axios from "axios";
import { Avatar } from "@mui/material";
import { notFound } from "next/navigation";

const TeamPage = async () => {
  const response = await axios.get("https://dummyjson.com/users");
  const { users } = response.data;

  if (!response) {
    return notFound();
  }
  return (
    <div
      className="tw-px-7 tw-tw-flex tw-flex-col tw-items-center tw-gap-y-12
    tw-gap-x-12"
    >
      <div className="tw-flex tw-flex-col tw-text-center tw-pb-[45px]  ">
        <h1 className=" tw-text-[40px] tw-font-bold">
          Meet Our <br /> Team
        </h1>

        <p className="tw-text-[#737373] ">
          Problems trying to resolve <br /> the conflict between the two major
          <br /> realms of Classical physics: <br /> Newtonian mechanics.
        </p>
      </div>
      {/*TEXT*/}
      <div className="tw-flex tw-flex-col  md:tw-flex-row md:tw-flex-wrap  md:tw-flex-wrap">
        {users.map((item) => (
          <div
            key={item.id}
            className="tw-flex tw-flex-row md:tw-basis-1/3 md:tw-gap-y-10"
          >
            <Avatar
              src={item.image}
              className="tw-w-[80px] tw-h-[80px] tw-pr-[30px] "
            />
            <div className="tw-flex tw-flex-col  ">
              <p className="tw-text-[20px] tw-font-semibold">{`${item.firstName} ${item.lastName}`}</p>
              <p className="tw-text-[15px] tw-font-medium">
                {item.company.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default TeamPage;
