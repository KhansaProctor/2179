//choropleth
vegaEmbed('#chart1', 'choropleth_map.vg.json').catch(console.error);

//Frequency by hour
vegaEmbed('#chart2', 'frequency_by_hour.vg.json').catch(console.error);

//Ridership by service
vegaEmbed('#chart3', 'ridership_by_service.vg.json').catch(console.error);

// Population vs ridership
vegaEmbed('#chart4', 'population_vs_ridership.vg.json').catch(console.error);

// Chart Time series 2022-2026
vegaEmbed('#chart5', 'daily_ridership_timeseries.vg.json').catch(console.error);

//Histogram of daily ridership
vegaEmbed('#chart6', 'ridership_distribution.vg.json').catch(console.error);

//Monthly heatmap
vegaEmbed('#chart7', 'monthly_heatmap.vg.json').catch(console.error);

//Regional share donut
vegaEmbed('#chart8', 'regional_share.vg.json').catch(console.error);

//Bus vs rail by region
vegaEmbed('#chart9', 'bus_vs_rail.vg.json').catch(console.error);

//Weekday vs weekend
vegaEmbed('#chart10', 'weekday_vs_weekend.vg.json').catch(console.error);