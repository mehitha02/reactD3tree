import React from 'react';
import { useEffect, useRef } from 'react';

const textLayout = {
  vertical: {
    title: {
      fontsize: 2000,
      textAnchor: 'left',
      x: 40,
    },
    attributes: {
      fontsize: 20,
    },
    attribute: {
      fontsize: 20,
      x: 40,
      dy: '1.2em',
    },
  },
  horizontal: {
    title: {
      fontsize: 400,
      textAnchor: 'left',
      x: 10,
      y: 55,
      padding: 50,
    },
    attributes: {
      margin: 50,
      fontsize: 200,
      x: 0,
      y: 50,
    },
    attribute: {
      fontsize: 2000,
      x: 0,
      dy: '1.2em',
    },
  },
};

// const Attributes = ({ isVisible, nodeDatum, data, orientation }) => {
//   return (
//     <table className="rd3t-label__attributes">
//       <tbody>
//         <tr>
//           <td {...textLayout[orientation].attributes}>{JSON.stringify(data)}</td>
//         </tr>
//         {nodeDatum.attributes &&
//           Object.entries(nodeDatum.attributes).map(([labelKey, labelValue], i) => (
//             <tr key={`${labelKey}-${i}`}>
//               <th {...textLayout[orientation].attribute}>{labelKey}</th>
//               <td {...textLayout[orientation].attribute}>{labelValue}</td>
//             </tr>
//           ))}
//       </tbody>
//     </table>
//   );
// };

const Attributes = ({ isVisible, nodeDatum, data, orientation }) => {
  const jsonData = JSON.stringify(data);
  console.log(data);
  return (
    <g>
      <rect
        x={textLayout[orientation].attributes.x}
        y={textLayout[orientation].attributes.y}
        width={400} // Set the width of the rectangle
        height={200} // Set the height of the rectangle
        fill="none"
        stroke="gray"
        // // stroke-width={5}
        // padding={3}
        // border={4}
        // box-sizing="border-box"
      />
      <text
        className="label-box"
        style={{ border: 'red' }}
        // style={{ fontsize: 200, x: 0, y: 50 }}
        {...textLayout[orientation].attributes}
        // onClick={handleAttributeClick}
      >
        {/* {JSON.stringify(data)} */}
        {
          // data &&
          //   Object.entries(nodeDatum.value.data).map(([key, value], index) => (
          //     <tspan x={0} dy={index > 0 ? '1.2em' : 0} key={key}>
          //       {key} ':' {JSON.stringify(value)} {/* Adjust the content as needed */}
          //     </tspan>
          //   ))}
          data &&
            Object.entries(nodeDatum.value.data).map(([key, value], index) => {
              if (Array.isArray(value)) {
                console.log(value);
                return (
                  <g key={key}>
                    {value
                      .filter(item => typeof item !== 'function')
                      .map((item, i) => (
                        <tspan x={0} dy={index > 0 || i > 0 ? '1.2em' : 0} key={`${key}-${i}`}>
                          {`${key}: ${JSON.stringify(item)}`} {/* Adjust the content as needed */}
                        </tspan>
                      ))}
                  </g>
                );
              } else {
                return (
                  <tspan x={0} dy={index > 0 ? '1.2em' : 0} key={key}>
                    {`${key}: ${JSON.stringify(value)}`} {/* Adjust the content as needed */}
                  </tspan>
                );
              }
            })
        }
        {/* {data &&
          Object.entries(data).map(([labelKey, labelValue], i) => (
            <table key={`${labelKey}-${i}`} {...textLayout[orientation].attribute}>
              <tr>
                <th {...textLayout[orientation].attribute}>{labelKey}</th>
                <th {...textLayout[orientation].attribute}>{labelValue}</th>
              </tr>
            </table>
          ))} */}
      </text>
    </g>
  );
};
{
  /* <table>
  <tr>
    <th>Name</th>
    <th>Age</th>
    <th>Gender</th>
  </tr>
</table>;
export default Attributes; */
}

// {
//   /* <tspan key={`${labelKey}-${i}`} {...textLayout[orientation].attribute}>
//             {labelKey}: {labelValue}
//           </tspan> */
// }

export default Attributes;

// const Attributes = ({ isVisible, nodeDatum, data, orientation }) => {
//   const jsonData = JSON.stringify(data);
//   console.log(data);
//   return (
//     <g>
//       <rect
// x={textLayout[orientation].attributes.x}
// y={textLayout[orientation].attributes.y}
// width={400} // Set the width of the rectangle
// height={200} // Set the height of the rectangle
// fill="none"
// stroke="gray"
//       />
//       <text
//         className="rd3t-label__attributes"
//         {...textLayout[orientation].attributes}
//         x={textLayout[orientation].attributes.x + 10} // Add some padding to the left
//         y={textLayout[orientation].attributes.y + 10} // Add some padding to the top
//       >
//         {data &&
//           Object.entries(nodeDatum.value.data).map(([key, value], index) => (
//             <tspan x={10} dy={index > 0 ? '1.2em' : 0} key={key}>
//               {key} ':' {JSON.stringify(value)} {/* Adjust the content as needed */}
//             </tspan>
//           ))}
//       </text>
//     </g>
//   );
// };

// const Attributes = ({ isVisible, nodeDatum, data, orientation }) => {
//   const textContainerRef = useRef(null);
//   const textRef = useRef(null);

//   useEffect(() => {
//     const textContainer = textContainerRef.current;
//     const textElement = textRef.current;
//     const text =
//       data &&
//       Object.entries(nodeDatum.value.data)
//         .map(([key, value]) => `${key}: ${JSON.stringify(value)}`)
//         .join(' ');

//     if (textElement) {
//       const canvas = document.createElement('canvas');
//       const ctx = canvas.getContext('2d');
//       ctx.font = `${textLayout[orientation].attributes.fontsize}px Arial`;
//       const textWidth = ctx.measureText(text).width;
//       const textHeight = ctx.measureText(text).width * 1.5; // Estimate text height based on font size

//       const rectWidth = Math.min(textWidth + 20, textContainer.clientWidth);
//       const rectHeight = textHeight * 1.5 + 20; // Add some padding

//       textContainer.setAttribute('width', `${rectWidth}`);
//       textContainer.setAttribute('height', `${rectHeight}`);
//       textElement.setAttribute('transform', `translate(${10}, ${10})`);
//     }
//   }, [data, textLayout, orientation]);

//   return (
//     <g ref={textContainerRef}>
//       <rect width={400} height={200} fill="none" stroke="gray" />
//       <text
//         ref={textRef}
//         className="rd3t-label__attributes"
//         {...textLayout[orientation].attributes}
//       >
//         {data &&
//           Object.entries(nodeDatum.value.data).map(([key, value], index) => (
//             <tspan x={0} dy={index > 0 ? '1.2em' : 0} key={key}>
//               {key}: {JSON.stringify(value)} {/* Adjust the content as needed */}
//             </tspan>
//           ))}
//       </text>
//     </g>
//   );
// };

// export default Attributes;
