export const daysFromNow = (n) => { const d = new Date(); d.setHours(12,0,0,0); d.setDate(d.getDate()+n); return d.toISOString().slice(0,10); };
export const organizations = [
 {id:'org1',name:'Gulmohar Residency Society',city:'Pune',contactEmail:'office@gulmohar.example',status:'active'},
 {id:'org2',name:'Sai Krupa Co-op Housing Society',city:'Nashik',contactEmail:'hello@saikrupa.example',status:'active'},
 {id:'org3',name:'Greenfield College',city:'Nashik',contactEmail:'admin@greenfield.example',status:'active'},
 {id:'org4',name:'Orbit Tech Park',city:'Pune',contactEmail:'facilities@orbit.example',status:'active'}
];
export const users = [
 {id:'u1',name:'Aarav Sharma',email:'user@demo.com',password:'Demo@123',role:'user',status:'active',joinedOn:daysFromNow(-90)},
 {id:'u2',name:'Meera Kulkarni',email:'manager@demo.com',password:'Demo@123',role:'manager',organizationId:'org1',status:'active',joinedOn:daysFromNow(-200)},
 {id:'u3',name:'Admin User',email:'admin@demo.com',password:'Demo@123',role:'admin',status:'active',joinedOn:daysFromNow(-300)},
 {id:'u4',name:'Rohan Patil',email:'rohan@example.com',password:'Demo@123',role:'user',status:'active',joinedOn:daysFromNow(-80)},
 {id:'u5',name:'Ananya Joshi',email:'ananya@example.com',password:'Demo@123',role:'user',status:'active',joinedOn:daysFromNow(-60)},
 {id:'u6',name:'Kabir Desai',email:'kabir@example.com',password:'Demo@123',role:'manager',organizationId:'org3',status:'active',joinedOn:daysFromNow(-100)},
 {id:'u7',name:'Priya Nair',email:'priya@example.com',password:'Demo@123',role:'user',status:'inactive',joinedOn:daysFromNow(-40)},
 {id:'u8',name:'Ishaan Shah',email:'ishaan@example.com',password:'Demo@123',role:'manager',organizationId:'org4',status:'active',joinedOn:daysFromNow(-130)}
];
export const facilities = ['Projector','AC','Wi-Fi','Microphone','Parking','Kitchen','Sound System','Power Backup','Whiteboard','Stage','Wheelchair Access'].map((name,i)=>({id:'f'+(i+1),name}));
const rows = [
 ['s1','Gulmohar Community Hall','Community Hall',100,'org1','Kothrud','Pune','A Wing','Ground',[1,2,3,4,6,10],'08:00','22:00',900],
 ['s2','Gulmohar Clubhouse','Society Clubhouse',45,'org1','Kothrud','Pune','Clubhouse','1',[2,3,5,8],'07:00','21:00',550],
 ['s3','Baner Collaboration Room','Meeting Room',18,'org4','Baner','Pune','Tower A','5',[1,2,3,8,9],'08:00','21:00',450],
 ['s4','Orbit Workshop Studio','Meeting Room',28,'org4','Baner','Pune','Tower B','2',[1,2,3,4,9],'08:00','22:00',650],
 ['s5','Greenfield Classroom 204','Classroom',40,'org3','College Road','Nashik','Academic Block','2',[1,3,8,9,11],'09:00','18:00',350],
 ['s6','Greenfield Seminar Room','Classroom',70,'org3','College Road','Nashik','Main Building','1',[1,2,3,4,8,9,10],'09:00','20:00',700],
 ['s7','Sai Krupa Society Hall','Community Hall',90,'org2','Panchavati','Nashik','Main Society','Ground',[2,4,5,6,7,10],'08:00','22:00',800],
 ['s8','Sai Krupa Terrace Lounge','Terrace Hall',35,'org2','Panchavati','Nashik','Terrace','Top',[3,5,7,10],'10:00','21:00',600],
 ['s9','Wakad Residents Room','Society Clubhouse',30,'org1','Wakad','Pune','B Block','1',[2,3,5,8,11],'07:00','21:00',400],
 ['s10','Orbit Boardroom','Meeting Room',12,'org4','Hinjawadi','Pune','Tower C','8',[1,2,3,8,9],'08:00','20:00',500],
 ['s11','Greenfield Open Learning Room','Classroom',25,'org3','Gangapur Road','Nashik','Library Wing','1',[3,8,9,11],'09:00','19:00',300],
 ['s12','Gulmohar Garden Pavilion','Terrace Hall',55,'org1','Kothrud','Pune','Garden','Ground',[3,5,6,7,10],'09:00','21:00',750],
 ['s13','College Road Activity Hall','Community Hall',120,'org3','College Road','Nashik','Sports Complex','Ground',[2,4,5,6,7,10,11],'08:00','21:00',1000],
 ['s14','Wakad Quiet Study Room','Classroom',16,'org1','Wakad','Pune','C Wing','3',[2,3,8,9],'08:00','20:00',250]
];
export const spaces = rows.map((r,i)=>({id:r[0],name:r[1],type:r[2],capacity:r[3],organizationId:r[4],area:r[5],city:r[6],building:r[7],floor:r[8],facilityIds:r[9].map(n=>'f'+n),openTime:r[10],closeTime:r[11],ratePerHour:r[12],description:'A welcoming neighborhood space for gatherings, study groups, workshops and shared ideas.',rules:'Leave the space tidy after use. Follow the venue hours and host guidelines.',status:i===13?'inactive':'active'}));
const bookingRows = [
 ['u1','s1',-3,'10:00','12:00',60,'Family lunch','completed','4821','entered'],
 ['u4','s2',-1,'15:00','17:00',20,'Yoga practice','cancelled','9342','pending'],
 ['u1','s3',1,'10:00','12:00',8,'Project meeting','confirmed','4821','pending'],
 ['u5','s1',2,'10:00','18:00',100,'Society celebration','confirmed','1384','pending'],
 ['u4','s5',0,'11:00','13:00',25,'Study session','confirmed','6724','pending'],
 ['u1','s7',4,'17:00','20:00',45,'Birthday party','confirmed','4821','pending'],
 ['u5','s4',5,'13:00','15:00',18,'Team workshop','confirmed','1384','pending'],
 ['u4','s8',2,'16:00','18:00',20,'Friends meetup','confirmed','6724','pending'],
 ['u1','s2',-5,'09:00','11:00',12,'Community planning','completed','4821','entered'],
 ['u5','s6',1,'14:00','16:00',55,'Seminar','confirmed','1384','pending'],
 ['u4','s9',3,'10:00','12:00',12,'Fitness class','confirmed','6724','pending'],
 ['u1','s10',-1,'14:00','15:00',6,'Planning meeting','completed','4821','entered'],
 ['u5','s12',6,'11:00','14:00',35,'Community brunch','confirmed','1384','pending'],
 ['u4','s13',7,'10:00','12:00',80,'Club gathering','confirmed','6724','pending']
];
export const bookings = bookingRows.map((r,i)=>({id:'BK-'+(1001+i),userId:r[0],spaceId:r[1],date:daysFromNow(r[2]),startTime:r[3],endTime:r[4],people:r[5],purpose:r[6],status:r[7],qrToken:'SMARTSPACE-'+(1001+i)+'-DEMO',idLast4:r[8],entryStatus:r[9],createdAt:daysFromNow(-Math.min(10,i+1))}));
export const schedules = [
 {id:'BL-1',spaceId:'s1',date:daysFromNow(3),startTime:'13:00',endTime:'16:00',purpose:'Maintenance'},
 {id:'BL-2',spaceId:'s2',date:daysFromNow(4),startTime:'09:00',endTime:'12:00',purpose:'Private society event'},
 {id:'BL-3',spaceId:'s5',date:daysFromNow(1),startTime:'09:00',endTime:'11:00',purpose:'Exam setup'},
 {id:'BL-4',spaceId:'s9',date:daysFromNow(6),startTime:'14:00',endTime:'16:00',purpose:'Cleaning'},
 {id:'BL-5',spaceId:'s3',date:daysFromNow(2),startTime:'15:00',endTime:'17:00',purpose:'Equipment service'}
];
export const decorators = [
 {id:'d1',name:'Peach & Petal Decor',speciality:'birthday',area:'Kothrud',startingPrice:3500,phone:'+91 98765 10001',rating:4.8},
 {id:'d2',name:'Little Lights Events',speciality:'birthday',area:'Baner',startingPrice:4500,phone:'+91 98765 10002',rating:4.7},
 {id:'d3',name:'Canvas Celebration Co.',speciality:'wedding',area:'Panchavati',startingPrice:8000,phone:'+91 98765 10003',rating:4.6},
 {id:'d4',name:'Brightside Corporate',speciality:'corporate',area:'Hinjawadi',startingPrice:6000,phone:'+91 98765 10004',rating:4.9},
 {id:'d5',name:'Confetti Corner',speciality:'birthday',area:'College Road',startingPrice:3000,phone:'+91 98765 10005',rating:4.5}
];
export const initialData = { organizations, users, facilities, spaces, bookings, schedules, decorators };
