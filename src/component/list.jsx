const { default: Filter } = require("./Filter");

const filters =[
    {
        name:'Date of Registration',
        type:'date'
    },
    {
        name:'Vendor Site',
        type:'select',
        option:[
            {value:'google',
            url:'www.google.in'
        },
            {value:'amazon',
            url:'www.amazon.in'
        },
            {value:'TataSteel',
            url:'www.Tatasteel.co.in'
        },
        ]
    },
    {
        name:'Rating',
        type:'number'
    },
    {
        name:'Type of bussiness',
        type:'types'
    },
    {
        name:'Assign To',
        type:'Projects'
    },
    {
        name:'Location',
        type:'Geograpical'
    },

];

const FilterChange =(val)=>{
    console.log(`Filter valued change is ${val}`);
};
<Filter filters ={filters} onFilterChange={FilterChange} buttonText= "Refine by"/>
