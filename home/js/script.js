const servicesContent = [
    {
        title: "",
        id: "",
        img: "",
        body: "",
    },
    {
        title: "",
        id: "",
        img: "",
        body: "",
    },
    {
        title: "",
        id: "",
        img: "",
        body: "",
    },
    {
        title: "",
        id: "",
        img: "",
        body: "",
    },
    {
        title: "",
        id: "",
        img: "",
        body: "",
    },
    {
        title: "",
        id: "",
        img: "",
        body: "",
    },
];

const experiencesContent = [
    {
        title: "",
        id: "",
        img: "",
        body: "",
    },
    {
        title: "",
        id: "",
        img: "",
        body: "",
    },
    {
        title: "",
        id: "",
        img: "",
        body: "",
    },
    {
        title: "",
        id: "",
        img: "",
        body: "",
    },
];


function filterContent(e) {
    // Toggle Active Class on Filter
    $('.filter-btn').removeClass('active');
    $(this).addClass('active');



    // 
    $('.job-openings .card').fadeOut();

    // Selected Tag
    let activeFilter = $(this).attr('id');

    if (activeFilter === 'all') {
        $('.job-openings .card').fadeIn();
    } else {
        $('.' + activeFilter).fadeIn();
    }
};

