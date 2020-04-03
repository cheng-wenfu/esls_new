import React, { useState, useEffect } from 'react';
import { Pie } from '@antv/g2plot';


interface valueType {
  type: string;
  value: number;
}

interface HomeStatisticDataPieProps {
  value: valueType[];
  elementId: string;
  title?: string;
  description?: string;
}

const HomeStatisticDataPie: React.FC<HomeStatisticDataPieProps>  = ({value, elementId, title, description}) => {
  // const [pie, setPie] = useState<Pie>()
  useEffect(() => {
    const piePlot = new Pie(document.getElementById(elementId), {
      forceFit: true,
      title: {
        visible: true,
        text: title || "饼图",
      },
      description: {
        visible: true,
        text: description || "这是一个饼图"
      },
      radius: 0.8,
      data: value,
      angleField: 'value',
      colorField: 'type',
      label: {
        visible: true,
        type: 'inner',
      }
    });
    // setPie(piePlot);
    // console.log("piePlot", piePlot)
    piePlot.render()
  },[])
    // const piePlot = new Pie(document.getElementById(elementId), {
    //   forceFit: true,
    //   title: {
    //     visible: true,
    //     text: title || "饼图",
    //   },
    //   description: {
    //     visible: true,
    //     text: description || "这是一个饼图"
    //   },
    //   radius: 0.8,
    //   data: value,
    //   angleField: 'value',
    //   colorField: 'type',
    //   label: {
    //     visible: true,
    //     type: 'inner',
    //   }
    // });
    // piePlot.render()

    // useEffect(() => {
    //   console.log("pie", pie)
    //   //piePlot.changeData(value)
    // },[])

  return <div id={elementId}></div>
}

export default HomeStatisticDataPie;
