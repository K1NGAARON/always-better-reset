const servicesContent = [
    {
        title: "Facial Work",
        id: "facial-work",
        img: "/home/img/services/image1.jpg",
        body: "facial work body",
    },
    {
        title: "Accupuncture",
        id: "accupuncture",
        img: "/home/img/services/image2.jpg",
        body: "accupuncture body",
    },
    {
        title: "Cupping",
        id: "cupping",
        img: "/home/img/services/image3.jpg",
        body: "cupping body",
    },
    {
        title: "Movement Analysis",
        id: "movement-analysis",
        img: "/home/img/services/image4.jpg",
        body: "movement analysis body",
    },
    {
        title: "Breathwork Analysis",
        id: "breathwork-analysis",
        img: "/home/img/services/image5.jpg",
        body: "breathwork analysis body",
    },
    {
        title: "Bloodwork Analysis",
        id: "bloodwork-analysis",
        img: "/home/img/services/image6.jpg",
        body: "bloodwork analysis body",
    },
];

const experiencesContent = [
    {
        title: "Breathwork classes",
        id: "breathwork-classes",
        img: "/home/img/services/image3.jpg",
        body: "breathwork classes body",
    },
    {
        title: "Bodywork classes",
        id: "bodywork-classes",
        img: "/home/img/services/image2.jpg",
        body: "bodywork body",
    },
    {
        title: "Breathwork 1-on-1",
        id: "breathwork",
        img: "/home/img/services/image1.jpg",
        body: "breathwork body",
    },
    {
        title: "Re set trips",
        id: "reset-trips",
        img: "/home/img/services/image4.jpg",
        body: "re set body",
    },
];

function filterServices(e) {
    const filterWrapper = $(this).closest('.filters');
    filterWrapper.find('.filter-btn').removeClass('active');
    $(this).addClass('active');

    let activeFilter = $(this).attr('id');

    const selectedService = servicesContent.find(service => service.id === activeFilter);

    $('#service-img').attr('src', selectedService.img);
    $('#service-body').text(selectedService.body);
};

function filterExperiences(e) {
    const filterWrapper = $(this).closest('.filters');
    filterWrapper.find('.filter-btn').removeClass('active');
    $(this).addClass('active');

    let activeFilter = $(this).attr('id');

    const selectedExperience = experiencesContent.find(experience => experience.id === activeFilter);
   
    $('#experiences-img').attr('src', selectedExperience.img);
    $('#experiences-body').text(selectedExperience.body);
}


$(document).ready(function() {
    $('.filters-services .filter-btn').click(filterServices);
    $('.filters-experiences .filter-btn').click(filterExperiences);
});