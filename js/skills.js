

const programmingSkills = [
    {Name: 'Python', level: 4, desc: 'Main Professional Language for Data Science/Engineering'},
    {Name: 'Javascript', level: 3, desc: 'Some simple web pages on professional and personal projects.'},
    {Name: 'C', level: 1, desc: 'Some simple challenges on Project Euler.'},
    {Name: 'R', level: 2, desc: 'Some analysis on personal projects.'},
    {Name: 'Scala', level: 2, desc: 'Some small engineering pipelines on Databricks.'},
]

const mlSkills = [
    {Name: 'Pytorch', level: 3, desc: 'Main Professional Language for Data Science/Engineering'},
    {Name: 'Keras', level: 2, desc: 'Some simple web pages on professional and personal projects.'},
    {Name: 'Sklearn', level: 4, desc: 'Some simple challenges on Project Euler.'},
]

const toolSkills = [
    {Name: 'Docker', level: 3, desc: 'Main Professional Language for Data Science/Engineering'},
    {Name: 'Sparks', level: 2, desc: 'Some simple web pages on professional and personal projects.'},
    {Name: 'Databricks', level: 2, desc: 'Some simple web pages on professional and personal projects.'},
]

// // Given a dictionary, creates a bar graph with the skills
function d3SkillGraph(skills_dict, target_id) {

    // Constant Variables
    const maxSkillLevel = 5

    // Create the SVG
    var svg = d3.select(target_id)
        .append("svg")
        .attr("width", "100%")
        .attr("heigth", "100%")
        .attr("padding", "5%")

    const width = parseInt(svg.style("width"));
    const height = parseInt(svg.style("height"));

    var simulation = d3.forceSimulation()
        .nodes(skills_dict);	

    // Add Forces
    simulation
        .force("charge_force", d3.forceManyBody())
        .force("center_force", d3.forceCenter(width / 2, height / 2));

    //draw circles for the nodes 
    var node = svg.append("g")
        .selectAll("icons")
        .data(skills_dict)
        .enter()
        .append("image")
        .attr("xlink:href", "https://github.com/favicon.ico")
        .attr("x", width/2)
        .attr("y", height/2)
        .attr("width", 16)
        .attr("height", 16);

    // The tick function
    function tickActions() {
        //update circle positions each tick of the simulation 
        node
            .attr("x", d => Math.min(Math.max(d.x, 0), width))
            .attr("y", d => Math.min(Math.max(d.y, 0), height));
    }           

    //add tick instructions: 
    simulation.on("tick", tickActions);
}

// Create the plots
d3SkillGraph(programmingSkills, "#skills-programming")
d3SkillGraph(mlSkills, "#skills-ml")
d3SkillGraph(toolSkills, "#skills-tools")