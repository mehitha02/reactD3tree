import React, { useState } from 'react';
import Attributes from './Attributes';

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
      height: 50,
    },
    attributes: {
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

const PureSvgNodeElement = ({ nodeDatum, orientation, toggleNode, onNodeClick }) => {
  const [data, setData] = useState();
  const [isVisible, setIsVisible] = useState(true);
  const [text, setText] = useState('On');

  // const handleClick = () => {
  //   setText(text === 'On' ? 'Off' : 'On');
  // };

  const handleNameClick = () => {
    // console.log('jjjd', nodeDatum)
    if (nodeDatum.value) {
      if (nodeDatum.value.data) {
        console.log(nodeDatum.value.data);
        setData(nodeDatum.value.data);
        setIsVisible(!isVisible);
      }
    }
  };
  // const handleAttributeClick = () => {
  //   if (nodeDatum.value) {
  //     if (nodeDatum.value.data) {
  //       console.log(nodeDatum.value.data);
  //       // setData(nodeDatum.value.data);
  //       setIsVisible(!isVisible);
  //     }
  //   }
  // };

  //   return (
  //     <>
  //       <circle r={40} onClick={toggleNode}></circle>
  //       <g className="rd3t-label" style={{ border: 30, fontsize: 50 }}>
  //         <rect
  //           x={textLayout[orientation].title.x - 30} // Adjust as needed
  //           y={textLayout[orientation].title.y - 20} // Adjust as needed
  //           width={200} // Adjust as needed
  //           height={50} // Adjust as needed
  //           fill="white" // Adjust as needed
  //           onClick={onNodeClick}
  //         ></rect>
  //         <text
  //           className="rd3t-label__title"
  //           style={{ fontSize: 20 }}
  //           {...textLayout[orientation].title}
  //           onClick={handleNameClick}
  //         >
  //           {nodeDatum.name}
  //         </text>
  //         <text className="rd3t-label__attributes" {...textLayout[orientation].attributes}>
  //           {JSON.stringify(data)}
  //           {nodeDatum.attributes &&
  //             Object.entries(nodeDatum.attributes).map(([labelKey, labelValue], i) => (
  //               <tspan key={`${labelKey}-${i}`} {...textLayout[orientation].attribute}>
  //                 {labelKey}: {labelValue}
  //               </tspan>
  //             ))}
  //         </text>
  //       </g>
  //     </>
  //   );
  // };

  return (
    <>
      <circle r={40} onClick={toggleNode} fill="white"></circle>
      <g
        className="label"
        style={{
          border: 30,
          fontSize: 20,
        }}
      >
        {/* <rect
          x={textLayout[orientation].title.x - 30} // Adjust as needed
          y={textLayout[orientation].title.y - 20} // Adjust as needed
          width={300} // Adjust as needed
          height={30} // Adjust as needed
          fill="white" // Adjust as needed
          onClick={onNodeClick}
        /> */}
        <text
          // className="rd3t-label__title"
          className="label-title"
          // style={{
          //   fontSize: 20,
          //   position: 'absolute',
          //   textAnchor: 'right',
          //   display: 'inline-block',
          //   marginTop: '100%',
          //   fontColor: 'red',
          // }}
          {...textLayout[orientation].title}
          onClick={handleNameClick}
        >
          {nodeDatum.name}
        </text>
        <Attributes
          isVisible={isVisible}
          nodeDatum={nodeDatum}
          data={data}
          orientation={orientation}
        />
      </g>
    </>
  );
};
export default PureSvgNodeElement;
