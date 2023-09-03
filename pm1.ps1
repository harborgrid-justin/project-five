# Create Backend Directories and Files
New-Item -Path . -Name "models" -ItemType "directory"
New-Item -Path .\models -Name "Notification.js" -ItemType "file"
New-Item -Path .\models -Name "Audit.js" -ItemType "file"
New-Item -Path .\models -Name "Task.js" -ItemType "file"
New-Item -Path .\models -Name "Project.js" -ItemType "file"
New-Item -Path .\models -Name "User.js" -ItemType "file"

New-Item -Path . -Name "routes" -ItemType "directory"
New-Item -Path .\routes -Name "notificationRoutes.js" -ItemType "file"
New-Item -Path .\routes -Name "auditRoutes.js" -ItemType "file"
New-Item -Path .\routes -Name "projectRoutes.js" -ItemType "file"
New-Item -Path .\routes -Name "authRoutes.js" -ItemType "file"

New-Item -Path . -Name "controllers" -ItemType "directory"
New-Item -Path . -Name "middleware" -ItemType "directory"
New-Item -Path .\middleware -Name "rateLimiter.js" -ItemType "file"
New-Item -Path .\middleware -Name "errorHandler.js" -ItemType "file"
New-Item -Path .\middleware -Name "dataValidation.js" -ItemType "file"
New-Item -Path .\middleware -Name "authorization.js" -ItemType "file"

New-Item -Path . -Name "services" -ItemType "directory"
New-Item -Path .\services -Name "emailService.js" -ItemType "file"
New-Item -Path .\services -Name "projectService.js" -ItemType "file"
New-Item -Path .\services -Name "taskService.js" -ItemType "file"

# Create Frontend Directories and Files
New-Item -Path . -Name "client" -ItemType "directory"
New-Item -Path .\client -Name "src" -ItemType "directory"
New-Item -Path .\client\src -Name "components" -ItemType "directory"
New-Item -Path .\client\src\components -Name "ProjectForm.js" -ItemType "file"
New-Item -Path .\client\src\components -Name "TaskList.js" -ItemType "file"
New-Item -Path .\client\src\components -Name "NotificationList.js" -ItemType "file"
New-Item -Path .\client\src\components -Name "ProjectDetails.js" -ItemType "file"

New-Item -Path .\client\src -Name "pages" -ItemType "directory"
New-Item -Path .\client\src\pages -Name "Login.js" -ItemType "file"
New-Item -Path .\client\src\pages -Name "Register.js" -ItemType "file"
New-Item -Path .\client\src\pages -Name "AdminDashboard.js" -ItemType "file"
New-Item -Path .\client\src\pages -Name "Profile.js" -ItemType "file"
New-Item -Path .\client\src\pages -Name "404.js" -ItemType "file"

New-Item -Path .\client\src -Name "hooks" -ItemType "directory"
New-Item -Path .\client\src\hooks -Name "useTasks.js" -ItemType "file"
New-Item -Path .\client\src\hooks -Name "useNotifications.js" -ItemType "file"

New-Item -Path .\client\src -Name "styles" -ItemType "directory"
New-Item -Path .\client\src\styles -Name "main.css" -ItemType "file"
New-Item -Path .\client\src\styles -Name "responsive.css" -ItemType "file"


# Backend Setup

# Initialize a new Node.js project
npm init -y

# Install necessary npm packages for the backend
npm install express mongoose nodemailer bcrypt jsonwebtoken express-validator socket.io

# Create Backend Directories and Files (as provided above)
# ... [previous directory and file creation commands] ...

# Frontend Setup

# Initialize a new React app within the client directory
npx create-react-app client

# Navigate to the client directory
cd client

# Install frontend dependencies
npm install axios react-router-dom

# Navigate back to the root directory
cd ..

# Create Frontend Directories and Files (as provided above)
# ... [previous directory and file creation commands for the frontend] ...

# Additional Setup (e.g., .gitignore, environment files)
New-Item -Path . -Name ".gitignore" -ItemType "file"
Add-Content -Path .gitignore -Value "node_modules/"
Add-Content -Path .gitignore -Value "client/node_modules/"
Add-Content -Path .gitignore -Value ".env"

New-Item -Path . -Name ".env" -ItemType "file"
Add-Content -Path .env -Value "MONGO_URI=your_mongodb_uri"
Add-Content -Path .env -Value "JWT_SECRET=your_jwt_secret"
Add-Content -Path .env -Value "EMAIL_USER=your_email"
Add-Content -Path .env -Value "EMAIL_PASS=your_email_password"

# Display a message indicating the setup is complete
Write-Output "Setup complete! Please update the .env file with your credentials."
