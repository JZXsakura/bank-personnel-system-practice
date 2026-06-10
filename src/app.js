console.log("Прототип информационной системы учета персонала банка загружен.");

const employees = [
  {
    id: "1001",
    name: "Иванов Иван Иванович",
    position: "Менеджер по работе с клиентами",
    department: "Кредитный отдел",
    status: "Работает"
  },
  {
    id: "1002",
    name: "Петрова Анна Сергеевна",
    position: "Аналитик",
    department: "Отдел рисков",
    status: "В отпуске"
  },
  {
    id: "1003",
    name: "Сидоров Павел Олегович",
    position: "Разработчик",
    department: "IT-отдел",
    status: "На больничном"
  },
  {
    id: "1004",
    name: "Кузнецова Мария Андреевна",
    position: "HR-специалист",
    department: "HR-отдел",
    status: "Работает"
  },
  {
    id: "1005",
    name: "Смирнов Дмитрий Алексеевич",
    position: "Финансовый аналитик",
    department: "Финансовый отдел",
    status: "Работает"
  },
  {
    id: "1006",
    name: "Орлова Екатерина Викторовна",
    position: "Специалист службы безопасности",
    department: "Служба безопасности",
    status: "В командировке"
  },
  {
    id: "1007",
    name: "Васильев Артем Николаевич",
    position: "Кредитный эксперт",
    department: "Кредитный отдел",
    status: "Работает"
  },
  {
    id: "1008",
    name: "Морозова Елена Павловна",
    position: "Бухгалтер",
    department: "Финансовый отдел",
    status: "Уволен"
  }
];

const employeeTableBody = document.querySelector("#employeeTableBody");
const employeeSearch = document.querySelector("#employeeSearch");
const departmentFilter = document.querySelector("#departmentFilter");
const statusFilter = document.querySelector("#statusFilter");
const resetFilters = document.querySelector("#resetFilters");
const employeeCount = document.querySelector("#employeeCount");

function getStatusClass(status) {
  if (status === "Работает") {
    return "status-working";
  }

  if (status === "В отпуске") {
    return "status-vacation";
  }

  if (status === "На больничном") {
    return "status-sick";
  }

  if (status === "В командировке") {
    return "status-trip";
  }

  if (status === "Уволен") {
    return "status-fired";
  }

  return "";
}

function renderEmployees(list) {
  if (!employeeTableBody) {
    return;
  }

  employeeTableBody.innerHTML = "";

  list.forEach((employee) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${employee.id}</td>
      <td>
        <strong>${employee.name}</strong>
      </td>
      <td>${employee.position}</td>
      <td>${employee.department}</td>
      <td>
        <span class="employee-status ${getStatusClass(employee.status)}">
          ${employee.status}
        </span>
      </td>
      <td>
        <div class="table-actions">
          <a href="employee-card.html" class="table-link">Открыть</a>
          <button type="button">Изменить</button>
        </div>
      </td>
    `;

    employeeTableBody.appendChild(row);
  });

  if (employeeCount) {
    employeeCount.textContent = list.length;
  }
}

function filterEmployees() {
  const searchValue = employeeSearch.value.toLowerCase().trim();
  const selectedDepartment = departmentFilter.value;
  const selectedStatus = statusFilter.value;

  const filteredEmployees = employees.filter((employee) => {
    const matchesSearch =
      employee.id.toLowerCase().includes(searchValue) ||
      employee.name.toLowerCase().includes(searchValue) ||
      employee.position.toLowerCase().includes(searchValue);

    const matchesDepartment =
      selectedDepartment === "all" || employee.department === selectedDepartment;

    const matchesStatus =
      selectedStatus === "all" || employee.status === selectedStatus;

    return matchesSearch && matchesDepartment && matchesStatus;
  });

  renderEmployees(filteredEmployees);
}

if (employeeTableBody) {
  renderEmployees(employees);

  employeeSearch.addEventListener("input", filterEmployees);
  departmentFilter.addEventListener("change", filterEmployees);
  statusFilter.addEventListener("change", filterEmployees);

  resetFilters.addEventListener("click", () => {
    employeeSearch.value = "";
    departmentFilter.value = "all";
    statusFilter.value = "all";
    renderEmployees(employees);
  });
}