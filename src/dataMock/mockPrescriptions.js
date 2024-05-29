const mockPrescriptions = [
    {
        id: 1,
        patientName: "Nguyễn Văn A",
        medications: [
            {name: "Paracetamol", dosage: "500mg", frequency: "1 viên mỗi 6 tiếng", quantity: 20},
            {name: "Ibuprofen", dosage: "400mg", frequency: "1 viên mỗi 8 tiếng", quantity: 15}
        ]
    },
    {
        id: 2,
        patientName: "Trần Thị B",
        medications: [
            {name: "Amoxicillin", dosage: "250mg", frequency: "1 viên mỗi 8 tiếng", quantity: 30},
            {name: "Diazepam", dosage: "5mg", frequency: "1 viên mỗi 12 tiếng", quantity: 10}
        ]
    },
    {
        id: 3,
        patientName: "Phạm Văn C",
        medications: [
            {name: "Loratadine", dosage: "10mg", frequency: "1 viên mỗi ngày", quantity: 25},
            {name: "Omeprazole", dosage: "20mg", frequency: "1 viên mỗi buổi sáng", quantity: 20}
        ]
    }
];

module.exports = mockPrescriptions;
