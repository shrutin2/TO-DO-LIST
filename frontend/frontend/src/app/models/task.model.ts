export interface Task {
    _id?: string;
    title: string;
    status: 'Not Started' | 'In Progress' | 'Completed';
    priority: 'Low' | 'Normal' | 'High';
    dueDate: string;
    comments?: string;
  }
  