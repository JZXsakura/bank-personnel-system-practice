# Структура базы данных

В текущей версии проекта данные сотрудников хранятся в виде массива JavaScript в файле `src/app.js`.

Для дальнейшего развития системы предлагается следующая логическая структура базы данных.

## Employee

| Поле | Тип | Описание |
|-------|-------|-------|
| id | INT | Идентификатор |
| personnel_number | VARCHAR(20) | Табельный номер |
| full_name | VARCHAR(255) | ФИО |
| hire_date | DATE | Дата приема |
| status | VARCHAR(50) | Статус |
| department_id | INT | Подразделение |
| position_id | INT | Должность |

## Department

| Поле | Тип |
|-------|-------|
| id | INT |
| name | VARCHAR(100) |
| code | VARCHAR(20) |

## Position

| Поле | Тип |
|-------|-------|
| id | INT |
| title | VARCHAR(100) |
| salary | DECIMAL(10,2) |