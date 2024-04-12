// Sample data for demonstration
const attendanceData = [
    { subject: 'Mathematics', percentage: 85 },
    { subject: 'Science', percentage: 90 },
    { subject: 'History', percentage: 75 },
];

const marksData = [
    { subject: 'Mathematics', marks: 95 },
    { subject: 'Science', marks: 88 },
    { subject: 'History', marks: 80 },
];

// Function to display attendance records
function displayAttendance() {
    const attendanceList = document.getElementById('attendanceList');
    attendanceData.forEach(data => {
        const li = document.createElement('li');
        li.textContent = `${data.subject}: ${data.percentage}%`;
        attendanceList.appendChild(li);
    });
}

// Function to display marks records
function displayMarks() {
    const marksList = document.getElementById('marksList');
    marksData.forEach(data => {
        const li = document.createElement('li');
        li.textContent = `${data.subject}: ${data.marks}`;
        marksList.appendChild(li);
    });
}

// Call functions to display data
displayAttendance();
displayMarks();
