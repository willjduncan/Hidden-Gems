const { Gem } = require('../models');

const gemData = [
  {
    title: "Pilot Mountain State Park",
    description: "Located in Surry and Yadkin counties 20 miles northwest of Winston-Salem, Pilot Mountain State Park centers around the iconic geologic knob that serves as a beacon to the surrounding Piedmont, inviting outdoor enthusiasts to a vast array of activities. Once a navigational landmark for the Saura tribe, the Big Pinnacle can be viewed from the park's summit area, which also provides panoramic views of the Piedmont and the Sauratown and Blue Ridge mountains. Trails take hikers around the mountain base, up Little Pinnacle, and along the Yadkin River. The park also offers bridle trails along the trail corridor connecting the mountain and river sections. Rock climbing and rappelling are allowed on portions of the park's steep cliffs. The lower slopes of Pilot Mountain offer tent and trailer camping, while the river section has two paddle-in campsites for nights along the river. Two of North Carolina's state trails traverse the park: the Mountains-to-Sea State Trail, as well as the Yadkin River paddle trail. A new visitor center with exhibits that focus on the natural and cultural history of the area augment the park's educational programs.",
    country: "USA",
    state: "North Carolina",
    visitors: 90000,
    pic: "https://asset---north-carolina.bldg15.net/img/3/3/3351ad2d-13bc-416d-b9fc-87837d30219a/Pilot%20Mountain%20State%20Park%20-%20CREDIT%20Richard%20Hill.90b07e2e.jpg",
    activity_type: "Outdoors",
    city: "Pinnacle",
    user_id: 3
    
  },
  {
    title: "Isle Royal National Park",
    description: "Explore a rugged, isolated island, far from the sights and sounds of civilization. Surrounded by Lake Superior, Isle Royale offers adventures for backpackers, hikers, boaters, kayakers, canoeists and scuba divers. Here, amid stunning scenic beauty, you'll find opportunities for reflection and discovery, and make memories that last a lifetime. Isle Royale National Park is open every year from April 16 through October 31. The island is closed from November 1 through April 15 due to extreme winter weather conditions and for the safety and protection of visitors. This closure extends 4.5 miles out into Lake Superior from the island. The park headquarters during the winter is in Houghton, Michigan. The summer headquarters is located at Mott Island on Isle Royale National Park.",
    country: "USA",
    state: "Michigan",
    visitors: 25798,
    pic: "https://www.nationalparks.org/sites/default/files/isleroyalnp_banner_rock-harbor_istock_posnov.jpg",
    activity_type: "Outdoors",
    city: "Houghton",
    user_id: 5
  },
  {
    title: "North Cascades National Park",
    description: "Less than three hours from Seattle, an alpine landscape beckons. Discover communities of life adapted to moisture in the west and recurring fire in the east. Explore jagged peaks crowned by more than 300 glaciers. Listen to cascading waters in forested valleys. Witness a landscape sensitive to the Earth's changing climate. Help steward the ecological heart of the Cascades. Access to North Cascades National Park and Ross Lake National Recreation Area is from the State Route 20 corridor. SR 20 (North Cascades Highway) connects with Interstate 5 (Exit 230) at Burlington. From the east, the highway intersects with US 97 at Okanogan and with SR 153 at Twisp. The State Department of Transportation closes a portion of the road between Ross Dam Trailhead and Lone Fir Campground in winter. The Lake Chelan National Recreation Area (Stehekin) is accessible by ferry or plane from Chelan.",
    country: "USA",
    state: "Washington",
    visitors: 18000,
    pic: "https://cascadeloop.objects.liquidweb.services/photos/lake-ann_cropped-for-nat-geo-2400x1600.jpg",
    activity_type: "Outdoors",
    city: "Sedro-Woolley",
    user_id: 1
  },
  {
    title: "Levine Museum of the New South",
    description: "The Levine Museum of the New South, is a history museum located in Charlotte, North Carolina whose exhibits focus on life in the North Carolina Piedmont after the American Civil War. The museum includes temporary and permanent exhibits on a range of Southern-related topics. Founded in 1991 as the Museum of the New South, it was renamed after museum patron and Family Dollar founder Leon Levine in 2001, also the year the current facility at 7th and College Streets downtown opened",
    country: "USA",
    state: "North Carolina",
    visitors: 65000,
    pic: "https://cloudfront-us-east-1.images.arcpublishing.com/gray/ZCM5JRD3ZNGWTO3F62CBHFVTKU.png",
    activity_type: "Museum",
    city: "Charlotte",
    user_id: 4
  },
  {
    title: "Gilcrease Museum",
    description: "Gilcrease Museum, also known as the Thomas Gilcrease Institute of American History and Art, is a museum northwest of downtown Tulsa, Oklahoma housing the world's largest, most comprehensive collection of art of the American West, as well as a growing collection of art and artifacts from Central and South America. The museum is named for Thomas Gilcrease, an oil man and avid art collector, who began the collection. He deeded the collection, as well as the building and property, to the City of Tulsa in 1958. Since July 1, 2008, Gilcrease Museum has been managed by a public-private partnership of the City of Tulsa and the University of Tulsa. The Helmerich Center for American Research at Gilcrease Museum was added in 2014 at a cost of $14 million to provide a secure archival area where researchers can access any of the more than 100,000 books, documents, maps and unpublished materials that have been acquired by the museum.",
    country: "USA",
    state: "Oklahoma",
    visitors: 80000,
    pic: "https://npr.brightspotcdn.com/dims4/default/741dd9a/2147483647/strip/true/crop/2880x1512+0+203/resize/1200x630!/quality/90/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2Flegacy%2Fsites%2Fkwgs%2Ffiles%2F202002%2FGilcrease-Museum-pic.jpg",
    activity_type: "Museum",
    city: "Tulsa",
    user_id: 2
  },
  {
    title: "Apsara Dancing.",
    description: "Cambodia Living Arts at the National Museum of Cambodia, Phnom Penh, features three different performances. Shadow & Light, presented by Morodok Koma Bassac, depicts scenes from the Reamker (the Cambodian version of India’s Ramayana epic). These episodes are presented through different forms including Sbaek Thom, large shadow puppets, Monkey Dance, a high energy performance featuring intricate paper mâché masks, and the Tale of the Golden Mermaid. Shadow & Light also showcases rhythmic folk dances evocative of Cambodian rural life. (Monday, Tuesday, Wednesday). Grace & Grandeur, presented by Yu Vek Selapak features a unique performance which combines the elegance of Apsara (celestial female spirits) with the harmony of Pin harps. Apsara dance is expresses the ideal of grace, an essential part of Cambodian culture finding its roots in both Hindu and Buddhist mythologies. This performance also includes Lakhon Khol, a Cambodian masked dance theater performed only by men, and a selection of folk dances which present an insight into the life of fishermen and farmers in rural Cambodia. (Thursday, Saturday). Heaven & Earth is presented by Yu Vek Selapak and features The Churning of the Ocean, a stunning piece which narrates the creation of the universe and the birth of Apsara. This spectacular dance is inspired by the famous epic depicted on the bas-reliefs of Angkor Wat, the battle between devas (gods) and asuras (demons) Heaven & Earth also presents lively folk dances originating from several Cambodian provinces. (Friday, Sunday)",
    country: "Cambodia",
    state: "Phnom Penh",
    visitors: 24000,
    pic: "https://media.tacdn.com/media/attractions-splice-spp-674x446/06/74/c4/75.jpg",
    activity_type: "Entertainment",
    city: "Phnom Penh",
    user_id: 4
  },
  {
    title: "Kalaripayattu Show",
    description: "One of the oldest fighting styles in the world, Kalaripayattu is the traditional martial art practiced in Kerala. Famed as the mother of all martial arts, this ancient art-form is believed to have been adapted into various martial art forms like karate, kung-fu and judo. The one hour evening performance show of Kalaripayattu in Munnar, includes showcasing of body control, flexibility and various form of exercises. Performed by skilled and trained artists, this show showcases their fighting skills with bare hands andmetallic weapons like swords, spears, shield and others. Experience breath-taking moments filled with excitement as you witness the fighters performing this ancient form of fighting. Get spellbound as their swords clashes with each other, observe them performing aerobic movements, attacking their opponents with deadly strikes and defending themselves with the shield.",
    country: "India",
    state: "Kerala",
    visitors: 31000,
    pic: "https://live.staticflickr.com/7056/6949289803_bbdf5d643a_b.jpg",
    activity_type: "Entertainment",
    city: "Munnar",
    user_id: 1
  }
];

const seedPosts = () => Gem.bulkCreate(gemData);

module.exports = seedPosts;