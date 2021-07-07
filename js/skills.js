const maxSkillLevel = 5
const barWidth = '3px'

const programmingSkills = [
    {Name: 'Python', level: 4, desc: 'Main Professional Language'},
    {Name: 'Javascript', level: 3, desc: 'Main Professional Language'},
    {Name: 'C', level: 1, desc: 'Main Professional Language'},
    {Name: 'R', level: 2, desc: 'Main Professional Language'},
    {Name: 'Scala', level: 2, desc: 'Main Professional Language'},
]

// Given a dictionary, creates a bar graph with the skills
function d3SkillGraph(skills_dict, target_id) {

        // Create the SVG
    var svg = d3.select(target_id)
        .append("svg")
        .attr("viewBox", `0 0 300 600`)

    console.log(svg.style("height"))
    // Create the scales
    // Y axis
    var y = d3.scaleBand()
        .range([ 0, svg.style("height")])
        .domain(skills_dict.map(d => d.Name))

    var x = d3.scaleLinear()
        .domain([1, maxSkillLevel])
        .range([ 0,  svg.style("width")]);

    // Create the bars
    svg.selectAll("bar")
        .data(skills_dict)
        .enter()
        .append("rect")
        .style("fill", "steelblue")
        .attr("x", 0)
        .attr("width", d => x(d.level))
        .attr("y", d => y(d.Name))
        .attr("height", barWidth);

    svg.append("g").call(d3.axisLeft(y))
}

// Create the plots
d3SkillGraph(programmingSkills, "#skills-programming")