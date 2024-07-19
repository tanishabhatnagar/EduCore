import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import { DefaultSidebar } from './components/Sidenavigation';
import Home from './components/Home';
import StudentPage from './components/Student';
import PaymentPage from './components/Payment';
import TeacherPage from './components/teacher';
import CoursePage from './components/Courses';
<<<<<<< HEAD


=======
import { AuthProvider } from './components/useAuth';
>>>>>>> ba1aeea1da4cd0a15620dec7b11696bc8c9f04e2
function App() {
  return (
    <>
    <AuthProvider>
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/student" element={<StudentPage />} />
        <Route path="/payment" element={ <PaymentPage/>} />
        <Route path="/instructor" element={ <TeacherPage/>} />
        <Route path="/course" element={ <CoursePage/>} />
        
      </Routes>
    </Router>
    </AuthProvider>
    </>
    
  );
}

export default App;
