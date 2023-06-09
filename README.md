# Role Challenge - Software Engineering

This challenge is a Single Page Application (SPA) that displays a list of images from the development machine and allows the user to sort them by category. The project is built using the React Framework.

The link to the images can be found [here](https://drive.google.com/file/d/1sgFxJ3q3ZqJ003U0NU3TaAp30xEGDd9q/view)

## External Libraries used

The above challenge was completed with the help of

1. [React Bootstrap](https://react-bootstrap.github.io/)
2. [Semantic UI](https://react.semantic-ui.com/)
3. [MDB React UI kit](https://mdbootstrap.com/docs/react/)
4. [React Router](https://reactrouter.com/en/main)

## Getting Started

To get started with this project, follow these steps:

Clone the project

```bash
  git clone https://github.com/Ayman-Shakil192/origin-health-challenge.git
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

## Login Page

The SPA contains a login page that allows for two types of users: normal and admin. Normal users have access to the dashboard page, while the admin can access both the admin dashboard page and the normal dashboard page.

![login-screen](https://user-images.githubusercontent.com/88003292/225722119-541e0660-0919-405d-8aa6-8475ffaec5be.png)

## Dashboard Page

The SPA contains a dashboard page where the user can view all the images and sort them by category. The user can assign, reassign, or delete a label on an image. The user can also view images filtered by labels.

![dashboard-page](https://user-images.githubusercontent.com/88003292/225723297-6c0a8043-97d8-482d-8aeb-d8863cc0bb6b.png)

## Admin Dashboard Page

The Admin Dashboard page is where the admin can create new labels. These labels are used to categorize the images mentioned above on the main dashboard page.

![admin-page](https://user-images.githubusercontent.com/88003292/225722499-8849a76b-a1be-48a2-ac74-29657982eea9.png)

## Building for production

To build the project for production, run the following command:

```bash
  npm run build
```

This will create a build directory with all the optimized files ready to be deployed.
