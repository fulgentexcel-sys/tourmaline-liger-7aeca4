
const $=s=>document.querySelector(s), $$=s=>document.querySelectorAll(s);
const storeKey="lakshya_erp_demo_v1";

const modules={
 dashboard:["⌂","Dashboard","Institute command center"],
 classes:["🏫","Classes","Classes, sections, rooms & class teachers"],
 departments:["🏢","Departments","Departments, HODs and academic units"],
 subjects:["📚","Subjects","Subjects, codes, marks and teacher mapping"],
 timeslots:["⏰","Time Slots","Periods, breaks and timing"],
 students:["👨‍🎓","Students","Admission, profile, parents and documents"],
 teachers:["👨‍🏫","Teachers","Faculty, subjects, classes and profile"],
 figures:["⭐","Important Figures","Principal, director, HOD and leadership"],
 routine:["🗓️","Create Routine","Build weekly timetable with clash checks"],
 viewroutine:["📅","View Routine","Class, teacher and room timetable"],
 receipts:["🧾","Receipt & QR","Digital receipt verification"],
 fees:["💳","Fees & Finance","Fee structure, collection and dues"],
 admit:["🎫","Admit Cards","Exam schedule and digital admit cards"],
 marksheets:["📊","Marksheets & Results","Marks, grades and report cards"],
 tc:["📄","Transfer Certificate","Generate, verify and print TC"],
 certificates:["🏅","Certificates","Bonafide, character, migration and custom certificates"],
 notes:["📝","Notes & Homework","Notes, homework, assignments and study files"],
 notifications:["🔔","Notifications","Broadcast school and class notices"],
 attendance:["✅","Attendance","Daily, period and subject attendance"],
 meetings:["🎥","Live Meetings","Online class and meeting records"],
 library:["📖","Library","Books, issue, return and digital resources"],
 transport:["🚌","Transport","Vehicles, routes, stops and student mapping"],
 hostel:["🏠","Hostel","Rooms, beds, residents and hostel fees"],
 staff:["👥","Staff & HR","Non-teaching staff, leave and salary records"],
 expenses:["💸","Expenses","School expenses and finance tracking"],
 reports:["📈","Reports & Analytics","Academic, attendance, fee and class reports"],
 roles:["🔐","Roles & Permissions","Role based access control"],
 audit:["🛡️","Audit Logs","Security and activity history"],
 settings:["⚙️","School Settings","Branding, session, policies and configuration"]
};

const seed={
classes:[["Class 8","A","English","Mrs. Sharma","40","Active"],["Class 9","A","English","Mr. Rahul","40","Active"],["Class 10","A","English","Ms. Priya","40","Active"]],
departments:[["Science","SCI","Dr. Das","12","240"],["Commerce","COM","Ms. Roy","8","180"],["Arts","ART","Mr. Ahmed","7","155"]],
subjects:[["English","ENG101","Class 8","Mrs. Sharma","100"],["Mathematics","MAT101","Class 8","Mr. Rahul","100"],["Science","SCI101","Class 8","Ms. Priya","100"]],
timeslots:[["Period 1","09:00","09:45","Teaching"],["Period 2","09:45","10:30","Teaching"],["Break","10:30","10:45","Break"],["Period 3","10:45","11:30","Teaching"]],
students:[["LKS1025","Rahul Sharma","Class 8-A","9876543210","91.67%","Active"],["LKS1026","Priya Das","Class 8-A","9876543211","96.67%","Active"],["LKS1027","Amit Roy","Class 9-A","9876543212","87.78%","Active"],["LKS1028","Riya Ahmed","Class 10-A","9876543213","94.20%","Active"]],
teachers:[["TCH001","Mrs. Sharma","English","Class 8-A","12 yrs","Active"],["TCH002","Mr. Rahul","Mathematics","Class 8-A","8 yrs","Active"],["TCH003","Ms. Priya","Science","Class 8-A","6 yrs","Active"]],
figures:[["Dr. Das","Principal","Administration","Active"],["Pinky Roy","Director","Management","Active"],["Ms. Priya","Academic Coordinator","Academic","Active"]],
receipts:[["LKS-RCP-1001","Rahul Sharma","₹5,000","05 Sep 2026","PAID","QR Valid"],["LKS-RCP-1002","Priya Das","₹6,500","04 Sep 2026","PAID","QR Valid"],["LKS-RCP-1003","Amit Roy","₹4,000","02 Sep 2026","PENDING","Not Paid"]],
fees:[["Rahul Sharma","Class 8-A","₹30,000","₹20,000","₹10,000","10 Sep 2026"],["Priya Das","Class 8-A","₹30,000","₹30,000","₹0","Paid"],["Amit Roy","Class 9-A","₹25,000","₹15,000","₹10,000","10 Sep 2026"]],
admit:[["Annual Examination 2026-27","Rahul Sharma","Class VIII-A","English","10 Mar 2027","10:00 AM"],["Annual Examination 2026-27","Rahul Sharma","Class VIII-A","Mathematics","12 Mar 2027","10:00 AM"],["Annual Examination 2026-27","Rahul Sharma","Class VIII-A","Science","15 Mar 2027","10:00 AM"]],
marksheets:[["Rahul Sharma","Class VIII-A","English","78/100","A","Pass"],["Rahul Sharma","Class VIII-A","Mathematics","85/100","A+","Pass"],["Rahul Sharma","Class VIII-A","Science","81/100","A+","Pass"],["Rahul Sharma","Class VIII-A","Assamese","88/100","A+","Pass"]],
tc:[["TC-2026-001","Rahul Sharma","Class VIII-A","05 Sep 2026","Issued"],["TC-2026-002","Amit Roy","Class IX-A","02 Sep 2026","Draft"]],
certificates:[["CERT-1001","Rahul Sharma","Bonafide Certificate","05 Sep 2026","Verified"],["CERT-1002","Priya Das","Character Certificate","04 Sep 2026","Verified"],["CERT-1003","Amit Roy","Migration Certificate","03 Sep 2026","Pending"]],
notes:[["Mathematics Chapter 1","Class VIII-A","Mr. Rahul","PDF","05 Sep 2026"],["Science Worksheet","Class VIII-A","Ms. Priya","PDF","04 Sep 2026"],["English Assignment","Class VIII-A","Mrs. Sharma","DOCX","03 Sep 2026"]],
notifications:[["Fee Reminder","Parents","Class VIII-A","Delivered","05 Sep 2026"],["Exam Notice","Students","All Classes","Delivered","04 Sep 2026"],["Holiday Notice","All","School","Read 92%","03 Sep 2026"]],
attendance:[["Rahul Sharma","Class VIII-A","180","165","15","91.67%"],["Priya Das","Class VIII-A","180","174","6","96.67%"],["Amit Roy","Class IX-A","180","158","22","87.78%"]],
meetings:[["Mathematics Live Class","Mr. Rahul","Class VIII-A","10 Sep 2026 10:00","45 min","Scheduled"],["Science Doubt Class","Ms. Priya","Class VIII-A","09 Sep 2026 11:00","50 min","Completed"]],
library:[["LIB-001","Mathematics for Class 8","R.D. Sharma","20","12","8"],["LIB-002","Science Explorer","NCERT","15","10","5"]],
transport:[["BUS-01","Route A","Driver Das","12 stops","28 students","Active"],["BUS-02","Route B","Driver Roy","9 stops","22 students","Active"]],
hostel:[["Room A-101","Boys","4 beds","3 occupied","Warden Das","Active"],["Room B-201","Girls","4 beds","2 occupied","Warden Roy","Active"]],
staff:[["STF-001","Accountant","Mr. Sen","Admin","Active"],["STF-002","Librarian","Ms. Bora","Library","Active"],["STF-003","Driver","Mr. Das","Transport","Active"]],
expenses:[["EXP-001","Electricity","₹12,500","05 Sep 2026","Paid"],["EXP-002","Stationery","₹8,700","03 Sep 2026","Paid"],["EXP-003","Maintenance","₹15,000","01 Sep 2026","Pending"]]
};

const headers={
classes:["Class","Section","Medium","Class Teacher","Capacity","Status"],departments:["Department","Code","HOD","Teachers","Students"],
subjects:["Subject","Code","Class","Teacher","Full Marks"],timeslots:["Slot","Start","End","Type"],students:["Student ID","Student","Class","Mobile","Attendance","Status"],
teachers:["Teacher ID","Teacher","Subject","Class","Experience","Status"],figures:["Name","Designation","Area","Status"],receipts:["Receipt ID","Student","Amount","Date","Payment","QR Status"],
fees:["Student","Class","Total Fee","Paid","Pending","Due"],admit:["Exam","Student","Class","Subject","Date","Time"],marksheets:["Student","Class","Subject","Marks","Grade","Result"],
tc:["TC No.","Student","Class","Issue Date","Status"],certificates:["Document ID","Student","Document","Date","Status"],notes:["Title","Target","Teacher","File","Date"],
notifications:["Title","Target","Audience","Status","Date"],attendance:["Student","Class","Working Days","Present","Absent","Attendance"],meetings:["Meeting","Teacher","Class","Date & Time","Duration","Status"],
library:["Book ID","Book","Author","Copies","Issued","Available"],transport:["Vehicle","Route","Driver","Stops","Students","Status"],hostel:["Room","Type","Beds","Occupied","Warden","Status"],
staff:["Staff ID","Role","Name","Department","Status"],expenses:["Expense ID","Category","Amount","Date","Status"]
};

const descriptions={
classes:"Create classes, sections, rooms, capacity and class teachers.",
departments:"Manage departments, HODs, subjects, teachers and student strength.",
subjects:"Create subjects, codes, marks, grades and teacher mapping.",
timeslots:"Create periods and breaks; use them in the routine builder.",
students:"Complete admission, parent details, documents, fees, attendance and results.",
teachers:"Teacher profiles, assigned subjects, classes, timetable and teaching records.",
figures:"Manage Principal, Director, HOD, Secretary, Coordinator and other key people.",
routine:"Build the weekly timetable with teacher, room and class clash prevention.",
viewroutine:"See class-wise, teacher-wise and room-wise routines.",
receipts:"Verify digital fee receipts using receipt ID or QR verification code.",
fees:"Fee structure, monthly dues, online/offline payment, reminders and receipts.",
admit:"Create exam schedules and generate printable digital admit cards.",
marksheets:"Enter marks, calculate grades and generate verified report cards.",
tc:"Generate transfer certificates with serial number and digital verification.",
certificates:"Generate Bonafide, Character, Migration and custom school certificates.",
notes:"Upload notes, homework, assignments, PDFs, images and study material.",
notifications:"Broadcast announcements to school, class, section, parent, teacher or student.",
attendance:"Daily, period-wise and subject-wise attendance with analytics.",
meetings:"Schedule live classes, meetings and track attendance and duration.",
library:"Book catalog, issue/return, fines and digital library resources.",
transport:"Vehicles, routes, drivers, stops, student mapping and transport fees.",
hostel:"Hostel buildings, rooms, beds, residents, wardens and hostel fees.",
staff:"Manage non-teaching staff, attendance, leave and HR records.",
expenses:"Record school expenses and monitor payment status.",
reports:"Academic, attendance, fees, class, teacher and management analytics.",
roles:"Create roles and control module-level permissions.",
audit:"Security and activity history for important changes.",
settings:"School branding, academic session, grading, notification and system settings."
};

function loadData(){
 try{return JSON.parse(localStorage.getItem(storeKey))||seed}catch(e){return seed}
}
function saveData(d){localStorage.setItem(storeKey,JSON.stringify(d))}
let db=loadData();

function toast(msg){const t=$("#toast");t.textContent=msg;t.classList.add("show");clearTimeout(window.__tt);window.__tt=setTimeout(()=>t.classList.remove("show"),2600)}
function pill(v){
 const s=String(v), l=s.toLowerCase();
 if(l.includes("active")||l.includes("paid")||l.includes("pass")||l.includes("verified")||l.includes("completed")) return `<span class="pill green">${s}</span>`;
 if(l.includes("pending")||l.includes("draft")||l.includes("scheduled")) return `<span class="pill yellow">${s}</span>`;
 if(l.includes("absent")||l.includes("failed")||l.includes("not paid")) return `<span class="pill red">${s}</span>`;
 return s;
}
function shell(){
 $("#app").innerHTML=`
 <aside class="sidebar" id="side">
  <div class="brand"><div class="brandmark">L</div><div><b>Lakshya Education</b><small>School Management ERP</small></div></div>
  <div class="navtitle">OVERVIEW</div><button class="nav active" data-page="dashboard"><span class="ic">⌂</span>Dashboard</button>
  <div class="navtitle">ACADEMIC STRUCTURE</div>
  ${nav("classes")} ${nav("departments")} ${nav("subjects")} ${nav("timeslots")}
  <div class="navtitle">PEOPLE & FACULTY</div>${nav("students")} ${nav("teachers")} ${nav("figures")} ${nav("staff")}
  <div class="navtitle">SCHEDULE & ROUTINE</div>${nav("routine")} ${nav("viewroutine")}
  <div class="navtitle">FEES & FINANCE</div>${nav("receipts")} ${nav("fees")} ${nav("expenses")}
  <div class="navtitle">EXAMS & DOCUMENTS</div>${nav("admit")} ${nav("marksheets")} ${nav("tc")} ${nav("certificates")}
  <div class="navtitle">LEARNING & COMMUNICATION</div>${nav("notes")} ${nav("notifications")} ${nav("meetings")}
  <div class="navtitle">STUDENT SERVICES</div>${nav("attendance")} ${nav("library")} ${nav("transport")} ${nav("hostel")}
  <div class="navtitle">REPORTS & SYSTEM</div>${nav("reports")} ${nav("roles")} ${nav("audit")} ${nav("settings")}
 </aside>
 <main class="main">
  <div class="topbar"><button class="iconbtn mobilebtn" onclick="$('#side').classList.toggle('open')">☰</button>
   <div class="search">🔎 <input id="globalSearch" placeholder="Search modules, students, teachers..." oninput="globalSearch(this.value)"></div>
   <div class="topactions"><button class="iconbtn" onclick="toast('All notifications are up to date')">🔔</button><button class="iconbtn" onclick="openPublic()">🌐</button><button class="userbtn"><span class="avatar">A</span>Institute Admin</button></div>
  </div>
  <section id="page-dashboard" class="page active">${dashboard()}</section>
  <section id="page-content" class="page"></section>
 </main>`;
 $$(".nav").forEach(b=>b.onclick=()=>openPage(b.dataset.page));
}
function nav(id){let m=modules[id];return `<button class="nav" data-page="${id}"><span class="ic">${m[0]}</span>${m[1]}</button>`}

function dashboard(){
 const counts={students:(db.students||[]).length,teachers:(db.teachers||[]).length,classes:(db.classes||[]).length,subjects:(db.subjects||[]).length};
 return `<div class="hero"><h1>Institute Dashboard</h1><p>Gurukul Shiksha Academy • Gotanagar Branch • Lakshya School ERP</p>
 <div class="hero-actions"><button class="primary" onclick="openModal('Add Student','students')">＋ Enroll Student</button><button class="secondary" onclick="openPage('admit')">🎫 Admit Cards</button><button class="secondary" onclick="openPage('marksheets')">📊 Results</button><button class="secondary" onclick="openPage('tc')">📄 TC & Certificates</button><button class="secondary" onclick="openPublic()">🌐 Public School Website</button></div></div>
 <div class="stats">
 ${stat("👨‍🎓","Total Students",counts.students,"students")}${stat("👨‍🏫","Teaching Faculty",counts.teachers,"teachers")}${stat("🏫","Active Classes",counts.classes,"classes")}${stat("📚","Subjects Offered",counts.subjects,"subjects")}
 </div>
 <div class="panel"><div class="panelhead"><h2>⚡ Academic & Administrative Tools</h2><span>Every button opens a working demo module</span></div>
 <div class="quickgrid">${quick("🏫","Manage Classes","classes")}${quick("💳","Monthly Fee Management","fees")}${quick("📚","Manage Subjects","subjects")}${quick("👨‍🎓","Enroll Students","students")}${quick("🎫","Admit Cards","admit")}${quick("📊","Marksheets / Results","marksheets")}${quick("📄","Transfer Certificate","tc")}${quick("🏅","Certificates","certificates")}${quick("🔔","Broadcast Notification","notifications")}</div></div>
 <div class="panel"><div class="panelhead"><h2>🚀 A to Z ERP Modules</h2><span>Animated • Responsive • Clickable</span></div><div class="modules">${Object.entries(modules).filter(([k])=>k!=="dashboard").map(([id,m])=>moduleCard(id,m)).join("")}</div></div>`;
}
function stat(icon,title,n,id){return `<div class="stat" onclick="openPage('${id}')"><div class="staticon">${icon}</div><div><small>${title}</small><strong>${n}</strong></div></div>`}
function quick(icon,title,id){return `<button class="quick" onclick="openPage('${id}')"><b>${icon} ${title}</b><span>→</span></button>`}
function moduleCard(id,m){return `<div class="module" onclick="openPage('${id}')"><div class="mi">${m[0]}</div><h3>${m[1]}</h3><p>${descriptions[id]}</p><div class="open">OPEN MODULE →</div></div>`}

function openPage(id){
 if(!modules[id])return;
 $$(".nav").forEach(b=>b.classList.toggle("active",b.dataset.page===id));
 $("#page-dashboard").classList.remove("active");$("#page-content").classList.add("active");
 $("#page-content").innerHTML=renderPage(id);
 $("#side").classList.remove("open");scrollTo({top:0,behavior:"smooth"});
}
function renderPage(id){
 const m=modules[id];
 if(id==="routine") return routinePage();
 if(id==="viewroutine") return viewRoutinePage();
 if(id==="reports") return reportsPage();
 if(id==="roles") return rolesPage();
 if(id==="audit") return auditPage();
 if(id==="settings") return settingsPage();
 if(id==="certificates") return certificatePage();
 if(id==="tc") return tcPage();
 if(id==="admit") return admitPage();
 if(id==="marksheets") return marksheetPage();
 const rows=db[id]||[], heads=headers[id]||["Name","Details","Status"];
 return `<div class="hero"><h1>${m[0]} ${m[1]}</h1><p>${descriptions[id]}</p><div class="hero-actions"><button class="primary" onclick="openModal('${m[1]}','${id}')">＋ Add New</button><button class="secondary" onclick="exportCSV('${id}')">⬇ Export CSV</button><button class="secondary" onclick="printCurrent('${m[1]}')">🖨 Print</button></div></div>
 <div class="panel"><div class="toolbar"><input class="field" id="tableSearch" placeholder="Search ${m[1]}..." oninput="filterRows(this.value)"><select class="field" onchange="filterStatus(this.value)"><option value="">All Status</option><option>Active</option><option>Paid</option><option>Pending</option><option>Verified</option><option>Completed</option></select></div>
 <div class="tablewrap"><table id="dataTable"><thead><tr>${heads.map(h=>`<th>${h}</th>`).join("")}<th>Action</th></tr></thead><tbody>${rows.map((r,i)=>`<tr>${r.map(c=>`<td>${pill(c)}</td>`).join("")}<td><button class="secondary" style="padding:5px 8px;font-size:9px" onclick="viewRecord('${id}',${i})">View</button> <button class="danger" style="padding:5px 8px;font-size:9px" onclick="deleteRecord('${id}',${i})">Delete</button></td></tr>`).join("")}</tbody></table></div></div>
 <div class="grid2"><div class="info"><h3>🔐 Role-based Access</h3><p>Institute Admin, Principal, Teacher, Accountant, Librarian, Parent and Student can be given separate permissions.</p></div><div class="info"><h3>🧾 Audit Ready</h3><p>Important create, update, delete and verification actions can be logged with date and time.</p></div></div>`;
}

function routinePage(){return `<div class="hero"><h1>🗓️ Create Routine</h1><p>Weekly timetable builder with class, subject, teacher and room assignment.</p><div class="hero-actions"><button class="primary" onclick="openModal('Add Routine','routine')">＋ Add Period</button><button class="secondary" onclick="toast('Clash check completed — no demo conflicts found')">✓ Check Clashes</button></div></div><div class="panel"><div class="tablewrap"><table><thead><tr><th>Day</th><th>Period 1</th><th>Period 2</th><th>Period 3</th><th>Period 4</th><th>Period 5</th></tr></thead><tbody>${["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"].map((d,i)=>`<tr><td><b>${d}</b></td><td>English<br><small>Mrs. Sharma</small></td><td>Mathematics<br><small>Mr. Rahul</small></td><td>Break</td><td>Science<br><small>Ms. Priya</small></td><td>Social Science<br><small>Mr. Das</small></td></tr>`).join("")}</tbody></table></div></div>`}
function viewRoutinePage(){return `<div class="hero"><h1>📅 View Routine</h1><p>Switch between class, teacher and room views.</p><div class="hero-actions"><button class="primary" onclick="toast('Class routine selected')">Class View</button><button class="secondary" onclick="toast('Teacher routine selected')">Teacher View</button><button class="secondary" onclick="toast('Room routine selected')">Room View</button><button class="secondary" onclick="printCurrent('Weekly Routine')">🖨 Print</button></div></div>${routinePage().split('<div class="hero">')[1].split('</div>')[0]?'<div class="panel"><div class="info"><h3>Weekly Routine</h3><p>Monday–Saturday timetable with automatic teacher/room clash validation.</p></div></div>':''}`}

function admitPage(){
 return `<div class="hero"><h1>🎫 Digital Admit Card</h1><p>Generate, preview, print and digitally verify examination admit cards.</p><div class="hero-actions"><button class="primary" onclick="openModal('Generate Admit Card','admit')">＋ Generate Admit Card</button><button class="secondary" onclick="openDocument('admit')">👁 Preview Demo</button><button class="secondary" onclick="printDocument('admit')">🖨 Print</button></div></div>
 <div class="panel"><div class="panelhead"><h2>Exam Schedule</h2><span>Annual Examination 2026-27</span></div><div class="tablewrap"><table><thead><tr>${headers.admit.map(h=>`<th>${h}</th>`).join("")}<th>Action</th></tr></thead><tbody>${db.admit.map((r,i)=>`<tr>${r.map(c=>`<td>${pill(c)}</td>`).join("")}<td><button class="secondary" onclick="openDocument('admit')">View / Print</button></td></tr>`).join("")}</tbody></table></div></div>
 <div class="grid2"><div class="info"><h3>🔳 QR Verification</h3><p>Each document can carry a unique Document ID and QR verification link.</p></div><div class="info"><h3>✅ Digital Verification</h3><p>Show Issued Date, Document ID, school identity and verification status on the document.</p></div></div>`;
}
function marksheetPage(){
 return `<div class="hero"><h1>📊 Result & Marksheet</h1><p>Marks entry, automatic totals, percentage, grade and verified digital report card.</p><div class="hero-actions"><button class="primary" onclick="openModal('Enter Marks','marksheets')">＋ Enter Marks</button><button class="secondary" onclick="openDocument('result')">👁 Preview Result</button><button class="secondary" onclick="printDocument('result')">🖨 Print</button></div></div>
 <div class="panel"><div class="tablewrap"><table><thead><tr>${headers.marksheets.map(h=>`<th>${h}</th>`).join("")}<th>Action</th></tr></thead><tbody>${db.marksheets.map((r,i)=>`<tr>${r.map(c=>`<td>${pill(c)}</td>`).join("")}<td><button class="secondary" onclick="openDocument('result')">View / Print</button></td></tr>`).join("")}</tbody></table></div></div>`;
}
function tcPage(){return `<div class="hero"><h1>📄 Transfer Certificate</h1><p>Generate school TC, assign document ID, verify and print.</p><div class="hero-actions"><button class="primary" onclick="openModal('Generate Transfer Certificate','tc')">＋ Generate TC</button><button class="secondary" onclick="openDocument('tc')">👁 Preview TC</button><button class="secondary" onclick="printDocument('tc')">🖨 Print</button></div></div><div class="panel"><div class="tablewrap"><table><thead><tr>${headers.tc.map(h=>`<th>${h}</th>`).join("")}<th>Action</th></tr></thead><tbody>${db.tc.map((r,i)=>`<tr>${r.map(c=>`<td>${pill(c)}</td>`).join("")}<td><button class="secondary" onclick="openDocument('tc')">View / Print</button></td></tr>`).join("")}</tbody></table></div></div>`}
function certificatePage(){return `<div class="hero"><h1>🏅 Certificates</h1><p>Bonafide, Character, Migration, Study and custom school certificates.</p><div class="hero-actions"><button class="primary" onclick="openModal('Generate Certificate','certificates')">＋ Generate Certificate</button><button class="secondary" onclick="openDocument('certificate')">👁 Preview</button><button class="secondary" onclick="printDocument('certificate')">🖨 Print</button></div></div><div class="panel"><div class="tablewrap"><table><thead><tr>${headers.certificates.map(h=>`<th>${h}</th>`).join("")}<th>Action</th></tr></thead><tbody>${db.certificates.map((r,i)=>`<tr>${r.map(c=>`<td>${pill(c)}</td>`).join("")}<td><button class="secondary" onclick="openDocument('certificate')">View / Print</button></td></tr>`).join("")}</tbody></table></div></div>`}

function reportsPage(){return `<div class="hero"><h1>📈 Reports & Analytics</h1><p>Management-level school insights.</p></div><div class="stats">${stat("👨‍🎓","Students",db.students.length,"students")}${stat("💰","Pending Fees","₹20,000","fees")}${stat("✅","Avg Attendance","92.4%","attendance")}${stat("📚","Classes Conducted","94%","routine")}</div><div class="grid2"><div class="info"><h3>Academic Analytics</h3><p>Class-wise results, subject performance, attendance, syllabus coverage and teacher activity.</p><button class="secondary" onclick="toast('Academic report generated')">Generate</button></div><div class="info"><h3>Finance Analytics</h3><p>Fee collection, outstanding dues, payment methods and expense summaries.</p><button class="secondary" onclick="toast('Finance report generated')">Generate</button></div><div class="info"><h3>Attendance Analytics</h3><p>Student, class, subject and monthly attendance trends.</p><button class="secondary" onclick="toast('Attendance report generated')">Generate</button></div><div class="info"><h3>AI School Analytics</h3><p>Future-ready AI layer for performance insights, alerts and management summaries.</p><button class="primary" onclick="toast('AI analytics demo opened')">Open AI</button></div></div>`}
function rolesPage(){return `<div class="hero"><h1>🔐 Roles & Permissions</h1><p>Control who can view, create, edit, delete and verify each module.</p></div><div class="panel"><div class="tablewrap"><table><thead><tr><th>Role</th><th>Dashboard</th><th>Students</th><th>Fees</th><th>Exams</th><th>Reports</th></tr></thead><tbody>${[["Super Admin","Full","Full","Full","Full","Full"],["Institute Admin","Full","Full","Full","Full","Full"],["Principal","View","Full","View","Full","Full"],["Teacher","View","Assigned","—","Marks","Own Classes"],["Accountant","View","View","Full","—","Finance"],["Parent","Own Child","Own Child","Own Child","Own Child","Own Child"],["Student","Own","Own","Own","Own","Own"]].map(r=>`<tr>${r.map(c=>`<td>${c}</td>`).join("")}</tr>`).join("")}</tbody></table></div></div>`}
function auditPage(){return `<div class="hero"><h1>🛡️ Audit Logs</h1><p>Track important changes and security events.</p></div><div class="panel"><div class="tablewrap"><table><thead><tr><th>Date & Time</th><th>User</th><th>Action</th><th>Module</th><th>Status</th></tr></thead><tbody>${[["05 Sep 2026 11:15","Institute Admin","Generated Result","Marksheets","Success"],["05 Sep 2026 10:30","Institute Admin","Generated Admit Card","Exams","Success"],["05 Sep 2026 09:45","Teacher","Updated Attendance","Attendance","Success"],["04 Sep 2026 16:20","Accountant","Updated Fee","Finance","Success"]].map(r=>`<tr>${r.map(c=>`<td>${pill(c)}</td>`).join("")}</tr>`).join("")}</tbody></table></div></div>`}
function settingsPage(){return `<div class="hero"><h1>⚙️ School Settings</h1><p>Configure branding, academic session, grading, documents and communication.</p></div><div class="grid2"><div class="info"><h3>🏫 School Profile</h3><p>Gurukul Shiksha Academy<br>Gotanagar Branch<br>School Code: GSA-GTN</p><button class="secondary" onclick="openModal('School Profile','settings')">Edit</button></div><div class="info"><h3>🎨 Branding</h3><p>Logo, banner, colors, public profile and document header.</p><button class="secondary" onclick="openModal('Branding','settings')">Edit</button></div><div class="info"><h3>📅 Academic Session</h3><p>Current Session: 2026-27<br>Configure promotion and exam calendar.</p><button class="secondary" onclick="openModal('Academic Session','settings')">Configure</button></div><div class="info"><h3>🔔 Notifications</h3><p>Push, SMS, email and parent notification settings.</p><button class="secondary" onclick="openModal('Notification Settings','settings')">Configure</button></div></div>`}

function openModal(title,type){
 const fields={
 students:["Student Name","Father's Name","Class / Section","Mobile","Admission No.","Date of Birth","Address","Email"],
 teachers:["Teacher Name","Employee ID","Subject","Class","Mobile","Qualification","Joining Date","Email"],
 classes:["Class Name","Section","Medium","Class Teacher","Capacity","Room Number"],
 subjects:["Subject Name","Subject Code","Class","Teacher","Full Marks","Passing Marks"],
 departments:["Department Name","Department Code","HOD","Description"],
 fees:["Student","Fee Type","Amount","Due Date","Payment Method","Remarks"],
 admit:["Exam Name","Student","Class / Section","Subject","Exam Date","Exam Time"],
 marksheets:["Student","Class","Subject","Full Marks","Marks Obtained","Grade"],
 tc:["Student","Class","Admission No.","Reason","Issue Date","Remarks"],
 certificates:["Student","Certificate Type","Issue Date","Purpose","Remarks"],
 receipts:["Receipt ID","Student","Amount","Payment Date","Payment Method","Verification Code"],
 notes:["Title","Class / Section","Subject","Teacher","Due Date","File / Link"],
 notifications:["Title","Target","Audience","Message","Send Date","Priority"],
 routine:["Class","Day","Period","Subject","Teacher","Room"],
 settings:["School Name","School Code","Academic Session","Principal","Contact","Website"]
 }[type]||["Name / Title","Code / ID","Class / Department","Mobile","Date","Status","Email","Remarks"];
 $("#modal")?.remove();
 document.body.insertAdjacentHTML("beforeend",`<div class="modal show" id="modal"><div class="modalbox"><div class="modalhead"><h3>${title}</h3><button class="close" onclick="$('#modal').remove()">✕</button></div><div class="formgrid">${fields.map((f,i)=>`<div class="formgroup ${i===fields.length-1&&fields.length%2?'full':''}"><label>${f}</label>${f.includes("Remarks")||f.includes("Message")||f.includes("Description")||f.includes("Address")?`<textarea placeholder="Enter ${f.toLowerCase()}..."></textarea>`:f.includes("Class")?`<select><option>Select</option><option>Class VIII-A</option><option>Class IX-A</option><option>Class X-A</option></select>`:`<input placeholder="Enter ${f.toLowerCase()}..." ${f.includes("Date")?`type="date"`:""}>`}</div>`).join("")}</div><div class="modalfoot"><button class="secondary" onclick="$('#modal').remove()">Cancel</button><button class="primary" onclick="saveForm('${type}')">Save & Continue</button></div></div></div>`);
}
function saveForm(type){
 const modal=$("#modal"); const inputs=[...modal.querySelectorAll("input,select,textarea")];
 const vals=inputs.map(x=>x.value||"—");
 if(db[type]){
   let row=vals.slice(0,(headers[type]||[]).length);
   while(row.length<(headers[type]||[]).length)row.push("—");
   db[type].unshift(row);saveData(db);
 }
 modal.remove();toast("Saved successfully ✓");
 if(type&&modules[type])openPage(type);
}
function viewRecord(id,i){const row=(db[id]||[])[i]||[];openModal("View / Edit",id);setTimeout(()=>{const ins=[...$("#modal").querySelectorAll("input")];row.forEach((v,j)=>{if(ins[j])ins[j].value=v})},0)}
function deleteRecord(id,i){if(!confirm("Delete this demo record?"))return;db[id].splice(i,1);saveData(db);toast("Record deleted");openPage(id)}
function filterRows(q){q=q.toLowerCase();$("#dataTable")?.querySelectorAll("tbody tr").forEach(tr=>tr.style.display=tr.innerText.toLowerCase().includes(q)?"":"none")}
function filterStatus(v){if(!v){filterRows("");return}$("#dataTable")?.querySelectorAll("tbody tr").forEach(tr=>tr.style.display=tr.innerText.toLowerCase().includes(v.toLowerCase())?"":"none")}
function globalSearch(q){q=q.trim().toLowerCase();if(!q)return;const f=Object.entries(modules).find(([id,m])=>(m[1]+" "+descriptions[id]).toLowerCase().includes(q));if(f)openPage(f[0])}

function exportCSV(id){
 const rows=db[id]||[], heads=headers[id]||[];let csv=[heads,...rows].map(r=>r.map(v=>`"${String(v).replaceAll('"','""')}"`).join(",")).join("\n");
 const a=document.createElement("a");a.href=URL.createObjectURL(new Blob([csv],{type:"text/csv"}));a.download=`lakshya-${id}.csv`;a.click();toast("CSV exported");
}
function printCurrent(title){const w=window.open("","_blank");w.document.write(`<html><head><title>${title}</title><style>body{font-family:Arial;padding:30px}h1{color:#1755d5}table{border-collapse:collapse;width:100%}th,td{border:1px solid #ccc;padding:8px;text-align:left}</style></head><body><h1>Lakshya School ERP</h1><h2>${title}</h2><p>Generated: ${new Date().toLocaleString()}</p><p>Institute: Gurukul Shiksha Academy — Gotanagar Branch</p></body></html>`);w.document.close();w.print()}

function documentHTML(type){
 const common=`<div class="dochead"><h1>GURUKUL SHIKSHA ACADEMY</h1><b>Gotanagar Branch</b><p>Powered by Lakshya School ERP</p></div>`;
 if(type==="admit")return `<div class="printdoc">${common}<h2 style="text-align:center">ANNUAL EXAMINATION 2026-27<br>ADMIT CARD</h2><div class="docmeta"><div><b>Student Name:</b> Rahul Sharma<br><b>Father's Name:</b> Rajesh Sharma<br><b>Class:</b> VIII<br><b>Section:</b> A</div><div><b>Roll No.:</b> 18<br><b>Admission No.:</b> 1025<br><b>Exam Session:</b> 2026-27<br><b>Document ID:</b> ADM-2026-001245</div></div><table class="doctable"><tr><th>Date</th><th>Subject</th><th>Time</th></tr><tr><td>10-03-2027</td><td>English</td><td>10:00 AM – 01:00 PM</td></tr><tr><td>12-03-2027</td><td>Mathematics</td><td>10:00 AM – 01:00 PM</td></tr><tr><td>15-03-2027</td><td>Science</td><td>10:00 AM – 01:00 PM</td></tr><tr><td>17-03-2027</td><td>Social Science</td><td>10:00 AM – 01:00 PM</td></tr><tr><td>19-03-2027</td><td>Assamese</td><td>10:00 AM – 01:00 PM</td></tr></table><h3>Instructions</h3><ul><li>Carry this admit card to the examination hall.</li><li>Mobile phone and electronic devices are not allowed.</li><li>Reach the exam hall 30 minutes before exam time.</li></ul><div class="verify">✓ Digitally Verified • Issue Date: 05-03-2027 10:30 AM • QR / Document ID: ADM-2026-001245</div></div>`;
 if(type==="result")return `<div class="printdoc">${common}<h2 style="text-align:center">ANNUAL EXAMINATION RESULT 2026-27</h2><div class="docmeta"><div><b>Student Name:</b> Rahul Sharma<br><b>Class:</b> VIII<br><b>Section:</b> A</div><div><b>Roll No.:</b> 18<br><b>Admission No.:</b> 1025<br><b>Document ID:</b> RES-2026-001245</div></div><table class="doctable"><tr><th>Subject</th><th>Full Marks</th><th>Marks Obtained</th><th>Grade</th></tr><tr><td>English</td><td>100</td><td>78</td><td>A</td></tr><tr><td>Mathematics</td><td>100</td><td>85</td><td>A+</td></tr><tr><td>Science</td><td>100</td><td>81</td><td>A+</td></tr><tr><td>Social Science</td><td>100</td><td>76</td><td>A</td></tr><tr><td>Assamese</td><td>100</td><td>88</td><td>A+</td></tr><tr><th>Total</th><th>500</th><th>408</th><th></th></tr><tr><th>Percentage</th><th colspan="2">81.60%</th><th>A+</th></tr><tr><th>Result</th><th colspan="2">PASS</th><th></th></tr></table><div class="verify">✓ Digitally Verified • Issue Date: 05-03-2027 11:15 AM • QR / Document ID: RES-2026-001245</div></div>`;
 if(type==="tc")return `<div class="printdoc">${common}<h2 style="text-align:center">TRANSFER CERTIFICATE</h2><div class="docmeta"><div><b>Student:</b> Rahul Sharma<br><b>Father:</b> Rajesh Sharma<br><b>Admission No.:</b> 1025</div><div><b>Class:</b> VIII-A<br><b>TC No.:</b> TC-2026-001<br><b>Issue Date:</b> 05-09-2026</div></div><table class="doctable"><tr><th>Particular</th><th>Details</th></tr><tr><td>Date of Birth</td><td>01 January 2013</td></tr><tr><td>Last Class Studied</td><td>VIII-A</td></tr><tr><td>Result</td><td>Passed</td></tr><tr><td>Conduct</td><td>Good</td></tr><tr><td>Reason for Leaving</td><td>Transfer of residence</td></tr></table><div class="verify">✓ Digitally Verified • Document ID: TC-2026-001</div><p style="margin-top:50px;text-align:right">Principal<br>Gurukul Shiksha Academy</p></div>`;
 return `<div class="printdoc">${common}<h2 style="text-align:center">${type==="certificate"?"BONAFIDE CERTIFICATE":"SCHOOL DOCUMENT"}</h2><p style="line-height:1.8">This is to certify that <b>Rahul Sharma</b> is/was a bona fide student of Gurukul Shiksha Academy, Gotanagar Branch, Class VIII-A.</p><div class="verify">✓ Digitally Verified • Document ID: CERT-2026-001245</div><p style="margin-top:70px;text-align:right">Principal<br>Gurukul Shiksha Academy</p></div>`;
}
function openDocument(type){const o=document.createElement("div");o.className="overlay show";o.innerHTML=`<div class="publicnav"><b>Lakshya School ERP — Document Preview</b><button class="primary" onclick="this.closest('.overlay').remove()">Close</button></div>${documentHTML(type)}`;document.body.appendChild(o)}
function printDocument(type){const w=window.open("","_blank");w.document.write(`<html><head><title>Lakshya Document</title><style>body{background:#eee;margin:0;font-family:Arial}.printdoc{max-width:850px;margin:20px auto;background:#fff;padding:35px;border:1px solid #ddd}.dochead{text-align:center;border-bottom:2px solid #1956c9;padding-bottom:12px}.dochead h1{color:#134aa9}.docmeta{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin:15px 0;font-size:12px}.doctable{width:100%;border-collapse:collapse}.doctable th,.doctable td{border:1px solid #bcc7d8;padding:8px}.verify{margin-top:15px;padding:10px;background:#ecfaf4;color:#137c55;font-weight:800}</style></head><body>${documentHTML(type)}</body></html>`);w.document.close();setTimeout(()=>w.print(),300)}
function openPublic(){
 const o=document.createElement("div");o.className="overlay show";o.innerHTML=`<div class="publicnav"><b>Gurukul Shiksha Academy</b><div><button class="secondary" onclick="toast('Admissions page opened')">Admissions</button> <button class="secondary" onclick="toast('Contact page opened')">Contact</button> <button class="primary" onclick="this.closest('.overlay').remove()">Back to ERP</button></div></div>
 <div class="publichero"><h1>Gurukul Shiksha Academy</h1><p>Gotanagar Branch • Learn • Lead • Serve</p><button class="primary" onclick="toast('Admission enquiry submitted')">Apply for Admission</button></div>
 <div class="publiccards"><div class="publiccard"><h3>📚 Academics</h3><p>Structured learning, examinations, digital notes and student progress tracking.</p></div><div class="publiccard"><h3>🎓 Student Life</h3><p>Activities, events, clubs, sports and holistic development.</p></div><div class="publiccard"><h3>🔐 Digital Documents</h3><p>Verified admit cards, report cards, certificates and student ID.</p></div></div>
 <div class="publicsection"><h2>About Our School</h2><p>Gurukul Shiksha Academy is presented here as a demo public-school website connected to Lakshya School ERP.</p><div class="grid2"><div class="info"><h3>Principal's Message</h3><p>Welcome to our digital campus. Parents and students can access attendance, fees, examinations, documents and notifications securely.</p></div><div class="info"><h3>Contact</h3><p>Gotanagar Branch, Guwahati, Assam<br>Phone: +91 XXXXX XXXXX<br>Email: school@example.com</p></div></div></div>`;document.body.appendChild(o);
}

shell();
