"use strict"

// const sqlite3 = require('sqlite3').verbose();
// var file = "./db/student.db";
const db = require('./models')

// let obj1 = {
// 	firstname: 'Surya',
// 	lastname: 'Saputra',
// 	dob: '1991-07-18'
// }

// let obj2 = {
// 	firstname: 'Jonny',
// 	lastname: 'Ismail',
// 	dob: '1997-05-19',
// 	email: 'jonnyIsmail@yahoo.com',
// 	height: 175,
// 	phone: '0867515178'	
// }

// let obj3 = {
// 	firstname: 'Jonny',
// 	lastname: 'Sihombing',
// 	dob: '1997-09-19',
// 	email: 'jonyIsmail2@yahoo.com',
// 	height: 120,
// 	phone: '0812123!@as'	
// }

db.Teacher.findAll()
	.then((teachers) => {
		teachers.forEach((teacher) => {
			teacher.getStudents()
				.then((students) => {
					console.log(`Teacher Name : ${teacher.name}\nTeacher ID : ${teacher.id}\nHas ${students.length} students\n`);
					students.forEach(student => {
						console.log(`Student Name : ${student.firstname} ${student.lastname}\n     Student ID : ${student.id}\n     Teacher ID : ${teacher.id}\n`);
					})
				})
				.catch(err => {
					console.log(err.message);
				})
		})
	})
	.catch(err => {
		console.log(err.message);
	})

// db.Student.create(obj3)
// 	.then(function(instance) {
// 		console.log('recorded!!')
// 	})
// 	.catch(function(err) {
// 		console.log(err.message)
// 	})

// db.Student.findAll()
// 	//promise for returning object, kalo berhasil masuk then
// 	.then(function(student) {
// 		student.forEach(function(data) {
// 			console.log(data.getFullName());
// 		})
// 	})
// 	.catch(function(err) {
// 		console.log(err.massage)
// 	}) 

// db.Student.findAll({
//   	where: {
//     	dob: '1997-05-19'
//   	}
// 	})
// 	.then(function(student) {
// 			student.forEach(function(data) {
// 			console.log(data.getAge());
// 			})
// 	})
// 	.catch(function(err) {
// 			console.log(err.massage)
// 	}) 

//
// db.Student.findAll()
// 	// attributes: ['firstname', 'lastname', 'dob']
// 	//promise for returning object, kalo berhasil masuk then
// 	.then(function(student) {
// 		student.forEach(function(data) {
// 			console.log(data.getAge());
// 		})
// 	})
// 	.catch(function(err) {
// 		console.log(err.massage)
// 	})

//getAllData
// db.Student.getAllData(students => {
// 	students.forEach(student => {
// 		console.log(student.toJSON());
// 	})
// })

