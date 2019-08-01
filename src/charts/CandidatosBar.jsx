// @flow

import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';

import React, { useEffect } from 'react';

export default function CandidatosBar(props) {
  const elementId = `${props.name}-cand`;

  useEffect(() => {
    const chart = am4core.create(elementId, am4charts.XYChart);
    chart.hiddenState.properties.opacity = 0;

    chart.paddingBottom = 30;

    chart.data = props.data;

    const categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = 'name';
    categoryAxis.renderer.grid.template.strokeOpacity = 0;
    categoryAxis.renderer.minGridDistance = 10;
    // categoryAxis.renderer.labels.template.dy = 35;
    categoryAxis.renderer.labels.template.disabled = true;
    categoryAxis.renderer.tooltip.dy = 35;

    const valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.inside = true;
    valueAxis.renderer.labels.template.fillOpacity = 0.3;
    valueAxis.renderer.grid.template.strokeOpacity = 0;
    valueAxis.min = 0;
    valueAxis.cursorTooltipEnabled = false;
    valueAxis.renderer.baseGrid.strokeOpacity = 0;

    const series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueY = 'votes';
    series.dataFields.categoryX = 'name';
    series.tooltipText = '{valueY.value}';
    series.tooltip.pointerOrientation = 'vertical';
    series.tooltip.dy = -6;
    series.columnsContainer.zIndex = 100;

    const columnTemplate = series.columns.template;
    columnTemplate.width = am4core.percent(50);
    columnTemplate.maxWidth = 16;
    columnTemplate.column.cornerRadius(60, 60, 10, 10);
    columnTemplate.strokeOpacity = 0;

    series.heatRules.push({
      target: columnTemplate,
      property: 'fill',
      dataField: 'valueY',
      min: am4core.color('#e5dc36'),
      max: am4core.color('#5faa46'),
    });
    series.mainContainer.mask = undefined;

    const cursor = new am4charts.XYCursor();
    chart.cursor = cursor;
    cursor.lineX.disabled = true;
    cursor.lineY.disabled = true;
    cursor.behavior = 'none';

    const bullet = columnTemplate.createChild(am4charts.CircleBullet);
    bullet.circle.radius = 10;
    bullet.valign = 'bottom';
    bullet.align = 'center';
    bullet.isMeasured = true;
    bullet.mouseEnabled = false;
    bullet.verticalCenter = 'bottom';
    bullet.interactionsEnabled = false;

    const hoverState = bullet.states.create('hover');
    const outlineCircle = bullet.createChild(am4core.Circle);
    outlineCircle.adapter.add('radius', (radius, target) => {
      const circleBullet = target.parent;
      return circleBullet.circle.pixelRadius + 10;
    });

    const image = bullet.createChild(am4core.Image);
    image.width = 60;
    image.height = 60;
    image.horizontalCenter = 'middle';
    image.verticalCenter = 'middle';
    image.propertyFields.href = 'href';

    image.adapter.add('mask', (mask, target) => {
      const circleBullet = target.parent;
      return circleBullet.circle;
    });

    let previousBullet;
    chart.cursor.events.on('cursorpositionchanged', (event) => {
      const dataItem = series.tooltipDataItem;

      if (dataItem.column) {
        const bullet = dataItem.column.children.getIndex(1);

        if (previousBullet && previousBullet != bullet) {
          previousBullet.isHover = false;
        }

        if (previousBullet != bullet) {
          const hs = bullet.states.getKey('hover');
          hs.properties.dy = -bullet.parent.pixelHeight + 30;
          bullet.isHover = true;

          previousBullet = bullet;
        }
      }
    });
  });

  return <div id={elementId} style={{ width: '100%', height: '500px' }} />;
}
