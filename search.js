const searchForm = document.querySelector("form");
const locationInput = document.getElementById("location");
const jobRoleSelect = document.getElementById("jobRole");
const candidateList = document.getElementById("candidates");

const candidates = [
  {
    name: "Aarav Patel",
    location: "Mumbai",
    jobRole: "Developer",
  },
  {
    name: "Aanya Sharma",
    location: "Delhi",
    jobRole: "Designer",
  },
  {
    name: "Advait Mishra",
    location: "Kolkata",
    jobRole: "Manager",
  },
  {
    name: "Ahana Chatterjee",
    location: "Chennai",
    jobRole: "Developer",
  },
  {
    name: "Aisha Reddy",
    location: "Bengaluru",
    jobRole: "Designer",
  },
  {
    name: "Aman Verma",
    location: "Hyderabad",
    jobRole: "Manager",
  },
  {
    name: "Amrita Singh",
    location: "Ahmedabad",
    jobRole: "Developer",
  },
  {
    name: "Anaya Gupta",
    location: "Pune",
    jobRole: "Designer",
  },
  {
    name: "Aniket Bhatia",
    location: "Jaipur",
    jobRole: "Manager",
  },
  {
    name: "Ananya Das",
    location: "Lucknow",
    jobRole: "Developer",
  },
  {
    name: "Anika Mehta",
    location: "Surat",
    jobRole: "Designer",
  },
  {
    name: "Arnav Saxena",
    location: "Kanpur",
    jobRole: "Manager",
  },
  {
    name: "Avani Dubey",
    location: "Nagpur",
    jobRole: "Developer",
  },
  {
    name: "Ayush Kapoor",
    location: "Indore",
    jobRole: "Designer",
  },
  {
    name: "Chaitanya Singh",
    location: "Thane",
    jobRole: "Manager",
  },
  {
    name: "Devika Menon",
    location: "Bhopal",
    jobRole: "Developer",
  },
  {
    name: "Dhruv Rana",
    location: "Ludhiana",
    jobRole: "Designer",
  },
  {
    name: "Diya Joshi",
    location: "Amritsar",
    jobRole: "Manager",
  },
  {
    name: "Eesha Sharma",
    location: "Kochi",
    jobRole: "Developer",
  },
  {
    name: "Gauri Nair",
    location: "Visakhapatnam",
    jobRole: "Designer",
  },
  {
    name: "Gautam Iyer",
    location: "Vadodara",
    jobRole: "Manager",
  },
  {
    name: "Rhea",
    location: "Patna",
    jobRole: "Designer",
  },
  {
    name: "Rahul",
    location: "Ranchi",
    jobRole: "Designer",
  },
  {
    name: "Kavya",
    location: "Hyderabad",
    jobRole: "Engineer",
  },
  {
    name: "Ruhi",
    location: "Thane",
    jobRole: "Manager",
  },
  {
    name: "Rhea",
    location: "Agartala",
    jobRole: "Engineer",
  },
  {
    name: "Ishika",
    location: "Visakhapatnam",
    jobRole: "Architect",
  },
  {
    name: "Ishika",
    location: "Gangtok",
    jobRole: "Developer",
  },
  {
    name: "Krishna",
    location: "Imphal",
    jobRole: "Designer",
  },
  {
    name: "Anika",
    location: "Agartala",
    jobRole: "Engineer",
  },
  {
    name: "Aarav",
    location: "Bengaluru",
    jobRole: "Architect",
  },
  {
    name: "Prisha",
    location: "Nashik",
    jobRole: "Designer",
  },
  {
    name: "Shanaya",
    location: "Nagpur",
    jobRole: "Engineer",
  },
  {
    name: "Arnav",
    location: "Varanasi",
    jobRole: "Engineer",
  },
  {
    name: "Aman",
    location: "Pune",
    jobRole: "Manager",
  },
  {
    name: "Ishaan",
    location: "Chennai",
    jobRole: "Developer",
  },
  {
    name: "Yash",
    location: "Thane",
    jobRole: "Manager",
  },
  {
    name: "Rhea",
    location: "Dehradun",
    jobRole: "Manager",
  },
  {
    name: "Jai",
    location: "Shillong",
    jobRole: "Architect",
  },
  {
    name: "Aanya",
    location: "Agartala",
    jobRole: "Developer",
  },
  {
    name: "Yash",
    location: "Madurai",
    jobRole: "Analyst",
  },
  {
    name: "Vaishnavi",
    location: "Madurai",
    jobRole: "Designer",
  },
  {
    name: "Zara",
    location: "Puducherry",
    jobRole: "Analyst",
  },
  {
    name: "Samaira",
    location: "Amritsar",
    jobRole: "Engineer",
  },
  {
    name: "Uday",
    location: "Kolkata",
    jobRole: "Architect",
  },
  {
    name: "Tanvi",
    location: "Daman",
    jobRole: "Engineer",
  },
  {
    name: "Samaira",
    location: "Silvassa",
    jobRole: "Architect",
  },
  {
    name: "Rohan",
    location: "Kochi",
    jobRole: "Developer",
  },
  {
    name: "Zara",
    location: "Srinagar",
    jobRole: "Designer",
  },
  {
    name: "Amrita",
    location: "Mumbai",
    jobRole: "Designer",
  },
  {
    name: "Jai",
    location: "Diu",
    jobRole: "Analyst",
  },
  {
    name: "Diya",
    location: "Imphal",
    jobRole: "Manager",
  },
  {
    name: "Kavya",
    location: "Ranchi",
    jobRole: "Developer",
  },
  {
    name: "Krishna",
    location: "Chennai",
    jobRole: "Manager",
  },
  {
    name: "Aarav",
    location: "Puducherry",
    jobRole: "Designer",
  },
  {
    name: "Diya",
    location: "Gangtok",
    jobRole: "Designer",
  },
  {
    name: "Aniket",
    location: "Bhopal",
    jobRole: "Architect",
  },
  {
    name: "Samar",
    location: "Agartala",
    jobRole: "Manager",
  },
  {
    name: "Vaishnavi",
    location: "Shimla",
    jobRole: "Manager",
  },
  {
    name: "Saanvi",
    location: "Nashik",
    jobRole: "Architect",
  },
  {
    name: "Eesha",
    location: "Itanagar",
    jobRole: "Developer",
  },
  {
    name: "Jasleen",
    location: "Dispur",
    jobRole: "Architect",
  },
  {
    name: "Rohan",
    location: "Patna",
    jobRole: "Analyst",
  },
  {
    name: "Advait",
    location: "Itanagar",
    jobRole: "Manager",
  },
  {
    name: "Rohan",
    location: "Madurai",
    jobRole: "Developer",
  },
  {
    name: "Rahul",
    location: "Agra",
    jobRole: "Analyst",
  },
  {
    name: "Jasleen",
    location: "Nashik",
    jobRole: "Engineer",
  },
  {
    name: "Avani",
    location: "Silvassa",
    jobRole: "Analyst",
  },
  {
    name: "Prisha",
    location: "Vadodara",
    jobRole: "Manager",
  },
  {
    name: "Eesha",
    location: "Puducherry",
    jobRole: "Manager",
  },
  {
    name: "Ayush",
    location: "Srinagar",
    jobRole: "Designer",
  },
  {
    name: "Aisha",
    location: "Nashik",
    jobRole: "Analyst",
  },
  {
    name: "Ishaan",
    location: "Kochi",
    jobRole: "Engineer",
  },
  {
    name: "Arnav",
    location: "Amritsar",
    jobRole: "Designer",
  },
  {
    name: "Ananya",
    location: "Bhopal",
    jobRole: "Architect",
  },
  {
    name: "Saanvi",
    location: "Itanagar",
    jobRole: "Developer",
  },
  {
    name: "Jai",
    location: "Madurai",
    jobRole: "Analyst",
  },
  {
    name: "Samaira",
    location: "Kanpur",
    jobRole: "Architect",
  },
  {
    name: "Sara",
    location: "Lucknow",
    jobRole: "Architect",
  },
  {
    name: "Rhea",
    location: "Ahmedabad",
    jobRole: "Designer",
  },
  {
    name: "Palak",
    location: "Ranchi",
    jobRole: "Engineer",
  },
  {
    name: "Diya",
    location: "Bhubaneswar",
    jobRole: "Analyst",
  },
  {
    name: "Siya",
    location: "Ranchi",
    jobRole: "Engineer",
  },
  {
    name: "Zara",
    location: "Mumbai",
    jobRole: "Developer",
  },
  {
    name: "Advait",
    location: "Gangtok",
    jobRole: "Engineer",
  },
  {
    name: "Aman",
    location: "Pune",
    jobRole: "Engineer",
  },
  {
    name: "Ishaan",
    location: "Jaipur",
    jobRole: "Analyst",
  },
  {
    name: "Rahul",
    location: "Kohima",
    jobRole: "Designer",
  },
  {
    name: "Vaishnavi",
    location: "Lucknow",
    jobRole: "Architect",
  },
  {
    name: "Vaishnavi",
    location: "Guwahati",
    jobRole: "Analyst",
  },
  {
    name: "Jasleen",
    location: "Dehradun",
    jobRole: "Manager",
  },
  {
    name: "Amrita",
    location: "Nashik",
    jobRole: "Analyst",
  },
  {
    name: "Kabir",
    location: "Goa",
    jobRole: "Designer",
  },
  {
    name: "Ishaan",
    location: "Agra",
    jobRole: "Developer",
  },
  {
    name: "Saanvi",
    location: "Agartala",
    jobRole: "Designer",
  },
  {
    name: "Shaurya",
    location: "Jammu",
    jobRole: "Architect",
  },
  {
    name: "Aniket",
    location: "Ranchi",
    jobRole: "Designer",
  },
  {
    name: "Kabir",
    location: "Nashik",
    jobRole: "Manager",
  },
  {
    name: "Siya",
    location: "Shimla",
    jobRole: "Designer",
  },
  {
    name: "Avani",
    location: "Thane",
    jobRole: "Designer",
  },
  {
    name: "Diya",
    location: "Daman",
    jobRole: "Architect",
  },
  {
    name: "Shanaya",
    location: "Nashik",
    jobRole: "Designer",
  },
  {
    name: "Devika",
    location: "Agartala",
    jobRole: "Developer",
  },
  {
    name: "Zara",
    location: "Agartala",
    jobRole: "Designer",
  },
  {
    name: "Aman",
    location: "Imphal",
    jobRole: "Analyst",
  },
  {
    name: "Gauri",
    location: "Surat",
    jobRole: "Analyst",
  },
  {
    name: "Avani",
    location: "Ahmedabad",
    jobRole: "Manager",
  },
  {
    name: "Uma",
    location: "Indore",
    jobRole: "Designer",
  },
  {
    name: "Zara",
    location: "Bhubaneswar",
    jobRole: "Architect",
  },
  {
    name: "Devika",
    location: "Chandigarh",
    jobRole: "Developer",
  },
  {
    name: "Eesha",
    location: "Shillong",
    jobRole: "Architect",
  },
  {
    name: "Mira",
    location: "Kolkata",
    jobRole: "Manager",
  },
  {
    name: "Dhruv",
    location: "Visakhapatnam",
    jobRole: "Architect",
  },
  {
    name: "Dhruv",
    location: "Lucknow",
    jobRole: "Architect",
  },
  {
    name: "Zara",
    location: "Goa",
    jobRole: "Architect",
  },
  {
    name: "Yash",
    location: "Lucknow",
    jobRole: "Developer",
  },
  {
    name: "Aanya",
    location: "Hyderabad",
    jobRole: "Analyst",
  },
  {
    name: "Gautam",
    location: "Jaipur",
    jobRole: "Analyst",
  },
  {
    name: "Mohit",
    location: "Kanpur",
    jobRole: "Manager",
  },
  {
    name: "Ayush",
    location: "Kohima",
    jobRole: "Analyst",
  },
  {
    name: "Hrithik",
    location: "Raipur",
    jobRole: "Designer",
  },
  {
    name: "Tanvi",
    location: "Hyderabad",
    jobRole: "Engineer",
  },
  {
    name: "Gautam",
    location: "Vadodara",
    jobRole: "Manager",
  },
  {
    name: "Aarav",
    location: "Shillong",
    jobRole: "Developer",
  },
  {
    name: "Aisha",
    location: "Bengaluru",
    jobRole: "Engineer",
  },
  {
    name: "Ishika",
    location: "Chennai",
    jobRole: "Engineer",
  },
  {
    name: "Navya",
    location: "Kolkata",
    jobRole: "Designer",
  },
  {
    name: "Rohan",
    location: "Jammu",
    jobRole: "Designer",
  },
  {
    name: "Uma",
    location: "Varanasi",
    jobRole: "Architect",
  },
  {
    name: "Advait",
    location: "Pune",
    jobRole: "Engineer",
  },
  {
    name: "Zara",
    location: "Jaipur",
    jobRole: "Architect",
  },
  {
    name: "Shaurya",
    location: "Gangtok",
    jobRole: "Architect",
  },
  {
    name: "Krishna",
    location: "Nagpur",
    jobRole: "Architect",
  },
  {
    name: "Arnav",
    location: "Agra",
    jobRole: "Designer",
  },
  {
    name: "Zara",
    location: "Itanagar",
    jobRole: "Analyst",
  },
  {
    name: "Amrita",
    location: "Raipur",
    jobRole: "Engineer",
  },
  {
    name: "Shanaya",
    location: "Dispur",
    jobRole: "Engineer",
  },
  {
    name: "Palak",
    location: "Varanasi",
    jobRole: "Manager",
  },
  {
    name: "Anaya",
    location: "Kohima",
    jobRole: "Engineer",
  },
  {
    name: "Kabir",
    location: "Kanpur",
    jobRole: "Analyst",
  },
  {
    name: "Aisha",
    location: "Silvassa",
    jobRole: "Designer",
  },
  {
    name: "Avani",
    location: "Jaipur",
    jobRole: "Developer",
  },
  {
    name: "Samaira",
    location: "Amritsar",
    jobRole: "Designer",
  },
  {
    name: "Yash",
    location: "Varanasi",
    jobRole: "Engineer",
  },
  {
    name: "Advait",
    location: "Kohima",
    jobRole: "Engineer",
  },
  {
    name: "Ahana",
    location: "Shimla",
    jobRole: "Developer",
  },
  {
    name: "Siya",
    location: "Bhubaneswar",
    jobRole: "Architect",
  },
  {
    name: "Palak",
    location: "Varanasi",
    jobRole: "Developer",
  },
  {
    name: "Ayush",
    location: "Kolkata",
    jobRole: "Engineer",
  },
  {
    name: "Samaira",
    location: "Shillong",
    jobRole: "Engineer",
  },
  {
    name: "Ruhi",
    location: "Vadodara",
    jobRole: "Architect",
  },
  {
    name: "Yash",
    location: "Gangtok",
    jobRole: "Analyst",
  },
  {
    name: "Navya",
    location: "Thane",
    jobRole: "Developer",
  },
  {
    name: "Mira",
    location: "Patna",
    jobRole: "Analyst",
  },
  {
    name: "Avani",
    location: "Chennai",
    jobRole: "Analyst",
  },
  {
    name: "Ishaan",
    location: "Kanpur",
    jobRole: "Developer",
  },
  {
    name: "Vihaan",
    location: "Puducherry",
    jobRole: "Architect",
  },
  {
    name: "Mohit",
    location: "Visakhapatnam",
    jobRole: "Designer",
  },
  {
    name: "Anaya",
    location: "Chennai",
    jobRole: "Engineer",
  },
  {
    name: "Sara",
    location: "Goa",
    jobRole: "Analyst",
  },
  {
    name: "Aman",
    location: "Silvassa",
    jobRole: "Analyst",
  },
  {
    name: "Dhruv",
    location: "Mumbai",
    jobRole: "Engineer",
  },
  {
    name: "Vihaan",
    location: "Lucknow",
    jobRole: "Manager",
  },
  {
    name: "Aman",
    location: "Thane",
    jobRole: "Architect",
  },
  {
    name: "Gautam",
    location: "Kochi",
    jobRole: "Engineer",
  },
  {
    name: "Saanvi",
    location: "Thane",
    jobRole: "Architect",
  },
  {
    name: "Anaya",
    location: "Patna",
    jobRole: "Developer",
  },
  {
    name: "Zara",
    location: "Amritsar",
    jobRole: "Manager",
  },
  {
    name: "Shaurya",
    location: "Kohima",
    jobRole: "Engineer",
  },
  {
    name: "Sara",
    location: "Ludhiana",
    jobRole: "Designer",
  },
  {
    name: "Advait",
    location: "Bhopal",
    jobRole: "Developer",
  },
  {
    name: "Mohit",
    location: "Daman",
    jobRole: "Architect",
  },
  {
    name: "Rohan",
    location: "Jaipur",
    jobRole: "Analyst",
  },
  {
    name: "Sara",
    location: "Kanpur",
    jobRole: "Analyst",
  },
  {
    name: "Jai",
    location: "Puducherry",
    jobRole: "Developer",
  },
  {
    name: "Anika",
    location: "Ahmedabad",
    jobRole: "Manager",
  },
  {
    name: "Aarav",
    location: "Kanpur",
    jobRole: "Engineer",
  },
  {
    name: "Devika",
    location: "Madurai",
    jobRole: "Designer",
  },
  {
    name: "Ananya",
    location: "Amritsar",
    jobRole: "Engineer",
  },
  {
    name: "Ananya",
    location: "Jaipur",
    jobRole: "Architect",
  },
  {
    name: "Om",
    location: "Gangtok",
    jobRole: "Architect",
  },
  {
    name: "Eesha",
    location: "Visakhapatnam",
    jobRole: "Analyst",
  },
  {
    name: "Ayush",
    location: "Ludhiana",
    jobRole: "Manager",
  },
  {
    name: "Siya",
    location: "Patna",
    jobRole: "Engineer",
  },
  {
    name: "Samar",
    location: "Guwahati",
    jobRole: "Developer",
  },
  {
    name: "Amrita",
    location: "Guwahati",
    jobRole: "Analyst",
  },
  {
    name: "Ananya",
    location: "Silvassa",
    jobRole: "Developer",
  },
  {
    name: "Diya",
    location: "Guwahati",
    jobRole: "Architect",
  },
  {
    name: "Aarav",
    location: "Indore",
    jobRole: "Manager",
  },
  {
    name: "Avani",
    location: "Kanpur",
    jobRole: "Analyst",
  },
  {
    name: "Advait",
    location: "Nashik",
    jobRole: "Engineer",
  },
  {
    name: "Mohit",
    location: "Guwahati",
    jobRole: "Developer",
  },
  {
    name: "Aarav",
    location: "Kolkata",
    jobRole: "Analyst",
  },
  {
    name: "Mira",
    location: "Imphal",
    jobRole: "Architect",
  },
  {
    name: "Aarav",
    location: "Kanpur",
    jobRole: "Designer",
  },
  {
    name: "Uday",
    location: "Patna",
    jobRole: "Engineer",
  },
  {
    name: "Arnav",
    location: "Silvassa",
    jobRole: "Developer",
  },
  {
    name: "Ahana",
    location: "Madurai",
    jobRole: "Engineer",
  },
  {
    name: "Shaurya",
    location: "Daman",
    jobRole: "Engineer",
  },
  {
    name: "Ayush",
    location: "Coimbatore",
    jobRole: "Engineer",
  },
  {
    name: "Shaurya",
    location: "Kanpur",
    jobRole: "Manager",
  },
  {
    name: "Ishaan",
    location: "Nashik",
    jobRole: "Architect",
  },
  {
    name: "Jasleen",
    location: "Dehradun",
    jobRole: "Analyst",
  },
  {
    name: "Ananya",
    location: "Shillong",
    jobRole: "Developer",
  },
  {
    name: "Aman",
    location: "Silvassa",
    jobRole: "Designer",
  },
  {
    name: "Rahul",
    location: "Gangtok",
    jobRole: "Manager",
  },
  {
    name: "Eesha",
    location: "Bengaluru",
    jobRole: "Engineer",
  },
  {
    name: "Siya",
    location: "Nagpur",
    jobRole: "Manager",
  },
  {
    name: "Ayush",
    location: "Kanpur",
    jobRole: "Manager",
  },
  {
    name: "Rahul",
    location: "Chandigarh",
    jobRole: "Architect",
  },
  {
    name: "Ayush",
    location: "Madurai",
    jobRole: "Architect",
  },
  {
    name: "Aanya",
    location: "Diu",
    jobRole: "Manager",
  },
  {
    name: "Anaya",
    location: "Lucknow",
    jobRole: "Developer",
  },
  {
    name: "Shanaya",
    location: "Shillong",
    jobRole: "Manager",
  },
  {
    name: "Aarav",
    location: "Agra",
    jobRole: "Developer",
  },
  {
    name: "Eesha",
    location: "Chennai",
    jobRole: "Developer",
  },
  {
    name: "Jasleen",
    location: "Indore",
    jobRole: "Manager",
  },
  {
    name: "Jai",
    location: "Goa",
    jobRole: "Manager",
  },
  {
    name: "Uday",
    location: "Chandigarh",
    jobRole: "Analyst",
  },
  {
    name: "Shaurya",
    location: "Nashik",
    jobRole: "Analyst",
  },
  {
    name: "Advait",
    location: "Bhubaneswar",
    jobRole: "Analyst",
  },
  {
    name: "Om",
    location: "Mumbai",
    jobRole: "Designer",
  },
  {
    name: "Pranav",
    location: "Chennai",
    jobRole: "Architect",
  },
  {
    name: "Anika",
    location: "Agartala",
    jobRole: "Developer",
  },
  {
    name: "Ishika",
    location: "Madurai",
    jobRole: "Developer",
  },
  {
    name: "Ayush",
    location: "Guwahati",
    jobRole: "Designer",
  },
  {
    name: "Palak",
    location: "Silvassa",
    jobRole: "Developer",
  },
  {
    name: "Ahana",
    location: "Shillong",
    jobRole: "Architect",
  },
  {
    name: "Navya",
    location: "Diu",
    jobRole: "Developer",
  },
  {
    name: "Jasleen",
    location: "Shimla",
    jobRole: "Designer",
  },
  {
    name: "Saanvi",
    location: "Bhubaneswar",
    jobRole: "Engineer",
  },
  {
    name: "Palak",
    location: "Mumbai",
    jobRole: "Developer",
  },
  {
    name: "Vaishnavi",
    location: "Nashik",
    jobRole: "Manager",
  },
  {
    name: "Gauri",
    location: "Shimla",
    jobRole: "Engineer",
  },
  {
    name: "Lakshya",
    location: "Patna",
    jobRole: "Engineer",
  },
  {
    name: "Prisha",
    location: "Coimbatore",
    jobRole: "Architect",
  },
  {
    name: "Tanvi",
    location: "Srinagar",
    jobRole: "Manager",
  },
  {
    name: "Gauri",
    location: "Varanasi",
    jobRole: "Analyst",
  },
  {
    name: "Vaishnavi",
    location: "Raipur",
    jobRole: "Engineer",
  },
  {
    name: "Aman",
    location: "Bhubaneswar",
    jobRole: "Architect",
  },
  {
    name: "Gautam",
    location: "Kochi",
    jobRole: "Analyst",
  },
  {
    name: "Shanaya",
    location: "Kolkata",
    jobRole: "Analyst",
  },
  {
    name: "Zara",
    location: "Kolkata",
    jobRole: "Designer",
  },
  {
    name: "Uday",
    location: "Dispur",
    jobRole: "Manager",
  },
  {
    name: "Sara",
    location: "Surat",
    jobRole: "Analyst",
  },
  {
    name: "Chaitanya",
    location: "Nagpur",
    jobRole: "Manager",
  },
  {
    name: "Om",
    location: "Varanasi",
    jobRole: "Analyst",
  },
  {
    name: "Tanvi",
    location: "Kanpur",
    jobRole: "Designer",
  },
  {
    name: "Avani",
    location: "Varanasi",
    jobRole: "Developer",
  },
  {
    name: "Prisha",
    location: "Surat",
    jobRole: "Analyst",
  },
  {
    name: "Jasleen",
    location: "Jammu",
    jobRole: "Designer",
  },
  {
    name: "Tanvi",
    location: "Visakhapatnam",
    jobRole: "Manager",
  },
  {
    name: "Arnav",
    location: "Silvassa",
    jobRole: "Architect",
  },
  {
    name: "Advait",
    location: "Chennai",
    jobRole: "Designer",
  },
  {
    name: "Anika",
    location: "Hyderabad",
    jobRole: "Architect",
  },
  {
    name: "Ishika",
    location: "Agra",
    jobRole: "Architect",
  },
  {
    name: "Chaitanya",
    location: "Agra",
    jobRole: "Manager",
  },
  {
    name: "Jasleen",
    location: "Agartala",
    jobRole: "Analyst",
  },
  {
    name: "Devika",
    location: "Raipur",
    jobRole: "Developer",
  },
  {
    name: "Ishika",
    location: "Kochi",
    jobRole: "Analyst",
  },
  {
    name: "Uma",
    location: "Agra",
    jobRole: "Designer",
  },
  {
    name: "Lakshya",
    location: "Thane",
    jobRole: "Architect",
  },
  {
    name: "Ayush",
    location: "Madurai",
    jobRole: "Developer",
  },
  {
    name: "Ahana",
    location: "Imphal",
    jobRole: "Manager",
  },
  {
    name: "Aman",
    location: "Coimbatore",
    jobRole: "Developer",
  },
  {
    name: "Tanvi",
    location: "Chandigarh",
    jobRole: "Manager",
  },
  {
    name: "Samaira",
    location: "Mumbai",
    jobRole: "Architect",
  },
  {
    name: "Neha",
    location: "Kanpur",
    jobRole: "Engineer",
  },
  {
    name: "Mira",
    location: "Thane",
    jobRole: "Analyst",
  },
  {
    name: "Aman",
    location: "Bhopal",
    jobRole: "Manager",
  },
  {
    name: "Aanya",
    location: "Itanagar",
    jobRole: "Engineer",
  },
  {
    name: "Rohan",
    location: "Diu",
    jobRole: "Developer",
  },
  {
    name: "Neha",
    location: "Shillong",
    jobRole: "Manager",
  },
  {
    name: "Vaishnavi",
    location: "Bengaluru",
    jobRole: "Developer",
  },
  {
    name: "Gautam",
    location: "Shimla",
    jobRole: "Architect",
  },
  {
    name: "Aman",
    location: "Pune",
    jobRole: "Analyst",
  },
  {
    name: "Amrita",
    location: "Gangtok",
    jobRole: "Analyst",
  },
  {
    name: "Neha",
    location: "Vadodara",
    jobRole: "Analyst",
  },
  {
    name: "Advait",
    location: "Visakhapatnam",
    jobRole: "Manager",
  },
  {
    name: "Hrithik",
    location: "Jammu",
    jobRole: "Architect",
  },
  {
    name: "Tanvi",
    location: "Mumbai",
    jobRole: "Architect",
  },
  {
    name: "Vaishnavi",
    location: "Ahmedabad",
    jobRole: "Analyst",
  },
  {
    name: "Tanvi",
    location: "Ludhiana",
    jobRole: "Architect",
  },
  {
    name: "Chaitanya",
    location: "Ranchi",
    jobRole: "Engineer",
  },
  {
    name: "Hrithik",
    location: "Raipur",
    jobRole: "Engineer",
  },
  {
    name: "Neha",
    location: "Kolkata",
    jobRole: "Engineer",
  },
  {
    name: "Anaya",
    location: "Guwahati",
    jobRole: "Designer",
  },
  {
    name: "Shanaya",
    location: "Coimbatore",
    jobRole: "Manager",
  },
  {
    name: "Rohan",
    location: "Dispur",
    jobRole: "Analyst",
  },
  {
    name: "Gauri",
    location: "Delhi",
    jobRole: "Engineer",
  },
  {
    name: "Neha",
    location: "Delhi",
    jobRole: "Developer",
  },
  {
    name: "Lakshya",
    location: "Itanagar",
    jobRole: "Engineer",
  },
  {
    name: "Zara",
    location: "Agra",
    jobRole: "Designer",
  },
  {
    name: "Anaya",
    location: "Agartala",
    jobRole: "Developer",
  },
  {
    name: "Kavya",
    location: "Puducherry",
    jobRole: "Designer",
  },
  {
    name: "Dhruv",
    location: "Kolkata",
    jobRole: "Analyst",
  },
  {
    name: "Ayush",
    location: "Thane",
    jobRole: "Architect",
  },
  {
    name: "Samar",
    location: "Raipur",
    jobRole: "Engineer",
  },
  {
    name: "Uday",
    location: "Imphal",
    jobRole: "Analyst",
  },
  {
    name: "Kabir",
    location: "Kohima",
    jobRole: "Analyst",
  },
  {
    name: "Avani",
    location: "Chennai",
    jobRole: "Manager",
  },
  {
    name: "Ananya",
    location: "Vadodara",
    jobRole: "Designer",
  },
  {
    name: "Jai",
    location: "Goa",
    jobRole: "Architect",
  },
  {
    name: "Zara",
    location: "Agra",
    jobRole: "Engineer",
  },
  {
    name: "Amrita",
    location: "Kolkata",
    jobRole: "Analyst",
  },
  {
    name: "Saanvi",
    location: "Jaipur",
    jobRole: "Designer",
  },
  {
    name: "Shaurya",
    location: "Jaipur",
    jobRole: "Manager",
  },
  {
    name: "Navya",
    location: "Chennai",
    jobRole: "Architect",
  },
  {
    name: "Palak",
    location: "Chandigarh",
    jobRole: "Engineer",
  },
  {
    name: "Samar",
    location: "Ranchi",
    jobRole: "Architect",
  },
  {
    name: "Chaitanya",
    location: "Dispur",
    jobRole: "Developer",
  },
  {
    name: "Uma",
    location: "Bhubaneswar",
    jobRole: "Architect",
  },
  {
    name: "Hrithik",
    location: "Delhi",
    jobRole: "Designer",
  },
  {
    name: "Saanvi",
    location: "Kanpur",
    jobRole: "Architect",
  },
  {
    name: "Samar",
    location: "Diu",
    jobRole: "Architect",
  },
  {
    name: "Rahul",
    location: "Shimla",
    jobRole: "Analyst",
  },
  {
    name: "Gauri",
    location: "Hyderabad",
    jobRole: "Designer",
  },
  {
    name: "Aarav",
    location: "Thane",
    jobRole: "Engineer",
  },
  {
    name: "Aisha",
    location: "Vadodara",
    jobRole: "Analyst",
  },
  {
    name: "Saanvi",
    location: "Lucknow",
    jobRole: "Architect",
  },
  {
    name: "Siya",
    location: "Chandigarh",
    jobRole: "Designer",
  },
];

function filterCandidates(location, jobRole) {
  return candidates.filter((candidate) => {
    const matchLocation = location
      ? candidate.location.toLowerCase().includes(location.toLowerCase())
      : true;
    const matchJobRole = jobRole
      ? candidate.jobRole.toLowerCase() === jobRole.toLowerCase()
      : true;
    return matchLocation && matchJobRole;
  });
}

function displayCandidates(filteredCandidates) {
  candidateList.innerHTML = "";

  if (filteredCandidates.length === 0) {
    const noResultsMessage = document.createElement("li");
    noResultsMessage.textContent = "No candidates found.";
    candidateList.appendChild(noResultsMessage);
  } else {
    filteredCandidates.forEach((candidate) => {
      const listItem = document.createElement("li");
      listItem.textContent = `${candidate.name} - ${candidate.location} - ${candidate.jobRole}`;
      candidateList.appendChild(listItem);
    });
  }
}

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const location = locationInput.value.trim();
  const jobRole = jobRoleSelect.value.trim();

  const filteredCandidates = filterCandidates(location, jobRole);
  displayCandidates(filteredCandidates);
});
