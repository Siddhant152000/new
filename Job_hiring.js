function validateForm() {
    let Name = document.getElementById('Name').value;
    let Email = document.getElementById('Email').value;
    // let position = document.getElementById('position').value;
    let Resume = document.getElementById('Resume').value
    let Gender = document.getElementById('Gender').value
    let Mobile = document.getElementById('Mobile').value

    if (!fullName || !email ||!resume ||!gender||!mobile) {
      alert('Please fill out all fields.');
      return false;
    }
    alert('Application submitted successfully!');
    return true;
  }