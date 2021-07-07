

const programmingSkills = [
    {Name: 'Python', level: 4, desc: 'Main Professional Language'},
    {Name: 'Javascript', level: 3, desc: 'Main Professional Language'},
    {Name: 'C', level: 1, desc: 'Main Professional Language'},
    {Name: 'R', level: 2, desc: 'Main Professional Language'},
    {Name: 'Scala', level: 2, desc: 'Main Professional Language'},
]

// Given a dictionary, creates a bar graph with the skills
function d3SkillGraph(skills_dict, target_id) {

    const maxSkillLevel = 5
    const barWidthMult = 0.1
    const barLeftOffsetMult = 0.2

        // Create the SVG
    var svg = d3.select(target_id)
        .append("svg")
        .attr("width", "100%")
        .attr("heigth", "100%")

    svg_width = parseInt(svg.style("width"));
    svg_height = parseInt(svg.style("height"));

    const barWidth = svg_height*barWidthMult
    const barLeftOffset = barLeftOffsetMult*svg_width

    // Create the scales
    // Y axis
    var y = d3.scaleBand()
        .range([ 0, svg_height])
        .domain(skills_dict.map(d => d.Name))

    var x = d3.scaleLinear()
        .domain([0, maxSkillLevel])
        .range([ 0,  svg_width]);

    // Add scales to axis
    var y_axis = d3.axisLeft()
    .scale(y);

    // Create the bars
    svg.selectAll("bar")
        .data(skills_dict)
        .enter()
        .append("rect")
        .style("fill", "steelblue")
        .attr("x", barLeftOffset)
        .attr("width", d => x(d.level))
        .attr("y", d => y(d.Name) + barWidth/2)
        .attr("height", barWidth);

    svg.append("g").attr("transform", "translate(" + barLeftOffset +", 0)").call(y_axis)

}

// Create the plots
d3SkillGraph(programmingSkills, "#skills-programming")
d3SkillGraph(programmingSkills, "#skills-ml")
d3SkillGraph(programmingSkills, "#skills-tools")