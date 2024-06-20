import { useState, useEffect } from "react";
import tw from "tailwind-styled-components";
import { Link } from "react-router-dom";

const CardContainer = tw.section`
  relative w-full overflow-hidden group aspect-square md:aspect-video drop-shadow-xl
`;

const Image = tw.img`
  w-full h-full object-cover rounded-lg
`;

const InnerCard = tw.div`
  absolute top-0 bottom-0 right-0 w-full p-8 lg:p-12 bg-white rounded-lg transform transition-transform duration-300
  ${({ $onDesktop, $isOpen }) =>
    $onDesktop
      ? "group-hover:translate-x-0 translate-x-full w-6/12 m-4"
      : $isOpen
      ? "translate-y-0 w-full"
      : "translate-y-full w-full"}
`;

const InnerCardContent = tw.div`
  space-y-4 h-full flex flex-col justify-between
`;

const Title = tw.h3`
  text-5xl font-bold mb-4
`;

const Text = tw.p`
  text-xl
`;

const ViewButton = tw.button`
  mt-4 px-4 py-2 bg-black text-white rounded
`;

const MobileButton = tw.button`
  md:hidden absolute bottom-0 rounded-lg w-full py-2 bg-black text-white
`;

function ProjectCard({ image, title, assignment, date, slug }) {
  const [isOpen, setIsOpen] = useState(false);
  const [onDesktop, setOnDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setOnDesktop(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <CardContainer>
      <Link to={`/project/${slug}`}>
        <Image src={image} alt={title} />
      </Link>

      <InnerCard $onDesktop={onDesktop} $isOpen={isOpen}>
        <InnerCardContent>
          <div>
            <Title>{title}</Title>
            <Text>{assignment}</Text>
            <Text>{date}</Text>
          </div>
          <Link to={`/project/${slug}`}>
            <ViewButton>Se prosjekt</ViewButton>
          </Link>
        </InnerCardContent>
      </InnerCard>

      {!onDesktop && (
        <MobileButton onClick={() => setIsOpen(!isOpen)}>View</MobileButton>
      )}
    </CardContainer>
  );
}

export default ProjectCard;

// import { useState, useEffect } from "react";

// import tw from "tailwind-styled-components";
// import { Link } from "react-router-dom";

// const CardContainer = tw.section`
//   relative w-full overflow-hidden group aspect-square md:aspect-video drop-shadow-xl
// `;

// const Image = tw.img`
//   w-full h-full object-cover rounded-lg
// `;

// const InnerCard = tw.div`
//   absolute top-0 bottom-0 right-0 w-full p-8 lg:p-12 bg-white rounded-lg transform transition-transform duration-300
//   ${(props) =>
//     props.onDesktop
//       ? "group-hover:translate-x-0 translate-x-full w-6/12 m-4"
//       : props.isOpen
//       ? "translate-y-0 w-full"
//       : "translate-y-full w-full"}
// `;

// const InnerCardContent = tw.div`
//   space-y-4 h-full flex flex-col justify-between
// `;

// const Title = tw.h3`
//   text-5xl font-bold mb-4
// `;

// const Text = tw.p`
//   text-xl
// `;

// const ViewButton = tw.button`
//   mt-4 px-4 py-2 bg-black text-white rounded
// `;

// const MobileButton = tw.button`
//   md:hidden absolute bottom-0 rounded-lg w-full py-2 bg-black text-white
// `;

// function ProjectCard({ image, title, assignment, date, slug }) {
//   const [isOpen, setIsOpen] = useState(false);
//   const [onDesktop, setOnDesktop] = useState(window.innerWidth >= 768);

//   useEffect(() => {
//     const handleResize = () => {
//       setOnDesktop(window.innerWidth >= 768);
//     };

//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <CardContainer>
//       <Link to={`/project/${slug}`}>
//         <Image src={image} alt={title} />
//       </Link>

//       <InnerCard onDesktop={onDesktop} isOpen={isOpen}>
//         <InnerCardContent>
//           <div>
//             <Title>{title}</Title>
//             <Text>{assignment}</Text>
//             <Text>{date}</Text>
//           </div>
//           <Link to={`/project/${slug}`}>
//             <ViewButton>Se prosjekt</ViewButton>
//           </Link>
//         </InnerCardContent>
//       </InnerCard>

//       {!onDesktop && (
//         <MobileButton onClick={() => setIsOpen(!isOpen)}>View</MobileButton>
//       )}
//     </CardContainer>
//   );
// }

// export default ProjectCard;
