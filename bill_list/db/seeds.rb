# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
User.create({ name: "test", email: "test@test.com", password: "Password1" })
Bill.create({ name: "Nipsco", due: 1.day.ago, active: true, user_id: 1, company_url: "http://nipsco.com", payer: "test", amount: 100.50 })
BillHistory.create({amount: 100.50, paid_date: 1.hour.ago, payer: "test", bill_id: 1})
