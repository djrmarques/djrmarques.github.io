

const programmingSkills = [
    {Name: 'Python', level: 4, desc: 'Main Professional Language for Data Science/Engineering', icon: "https://www.python.org/favicon.ico"},
    {Name: 'Javascript', level: 3, desc: 'Some simple web pages on professional and personal projects.', icon: "https://cdn.iconscout.com/icon/free/png-512/javascript-2752148-2284965.png"},
    {Name: 'C', level: 1, desc: 'Some simple challenges on Project Euler.', icon: "https://toppng.com/uploads/preview/c-programming-icon-c-programming-language-logo-11562945679duaxtn3yq0.png"},
    {Name: 'R', level: 2, desc: 'Some analysis on personal projects.', icon: "data:image/jpeg;base64,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"},
    {Name: 'Scala', level: 2, desc: 'Some small engineering pipelines on Databricks.', icon: "data:image/jpeg;base64,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"},
]

const mlSkills = [
    {Name: 'Pytorch', level: 3, desc: 'Main Professional Language for Data Science/Engineering', icon: "https://www.python.org/favicon.ico"},
    {Name: 'Keras', level: 2, desc: 'Some simple web pages on professional and personal projects.', icon: "https://www.python.org/favicon.ico"},
    {Name: 'Sklearn', level: 4, desc: 'Some simple challenges on Project Euler.'},
]

const toolSkills = [
    {Name: 'Docker', level: 3, desc: 'Main Professional Language for Data Science/Engineering', icon: "https://www.python.org/favicon.ico"},
    {Name: 'Sparks', level: 2, desc: 'Some simple web pages on professional and personal projects.', icon: "https://www.python.org/favicon.ico"},
    {Name: 'Databricks', level: 2, desc: 'Some simple web pages on professional and personal projects.', icon: "https://www.python.org/favicon.ico"},
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
        .attr("xlink:href", d => d.icon)
        .attr("x", width/2)
        .attr("y", height/2)
        .attr("width", 16);

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