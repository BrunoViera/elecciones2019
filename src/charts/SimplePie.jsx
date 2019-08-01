// @flow

import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';

import React, { useEffect } from 'react';

export default function SimplePie(props) {
  const elementId = useEffect(() => {
    const chart = am4core.create(props.name, am4charts.PieChart);
    // Add and configure Series
    const pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = 'votes';
    pieSeries.dataFields.category = 'name';
    // Let's cut a hole in our Pie chart the size of 30% the radius
    chart.innerRadius = am4core.percent(30);
    // Put a thick white border around each Slice
    pieSeries.slices.template.stroke = am4core.color('#4a2abb');
    pieSeries.slices.template.strokeWidth = 2;
    pieSeries.slices.template.strokeOpacity = 1;
    pieSeries.slices.template
      // change the cursor on hover to make it apparent the object can be interacted with
      .cursorOverStyle = [
        {
          property: 'cursor',
          value: 'pointer',
        },
      ];

    pieSeries.labels.template.disabled = true;


    // Create a base filter effect (as if it's not there) for the hover to return to
    const shadow = pieSeries.slices.template.filters.push(new am4core.DropShadowFilter());
    shadow.opacity = 0;

    // Create hover state
    // normally we have to create the hover state, in this case it already exists
    const hoverState = pieSeries.slices.template.states.getKey('hover');
    // Slightly shift the shadow and make it more prominent on hover
    const hoverShadow = hoverState.filters.push(new am4core.DropShadowFilter());
    hoverShadow.opacity = 0.7;
    hoverShadow.blur = 5;
    // Add a legend
    chart.legend = new am4charts.Legend();
    chart.data = props.data;
  });

  return (
    <div
      id={props.name}
      style={{ width: '100%', height: '500px' }}
    />
  );
}
