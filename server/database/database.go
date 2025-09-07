// server/database/database.go
package database

import (
	"fmt"
	"log"
	"os"

	"blog-server/models"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

// db is a private variable to hold the database connection.
// This prevents other packages from accessing it directly.
var db *gorm.DB

func Connect() {
	var err error

	dsn := fmt.Sprintf(
		"host=%s user=%s password=%s dbname=%s port=%s sslmode=disable",
		os.Getenv("DB_HOST"),
		os.Getenv("DB_USER"),
		os.Getenv("DB_PASSWORD"),
		os.Getenv("DB_NAME"),
		os.Getenv("DB_PORT"),
	)

	// Initialize the private db variable
	db, err = gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		log.Fatal("Failed to connect to database:", err)
	}

	// Auto migrate
	err = db.AutoMigrate(&models.Post{})
	if err != nil {
		log.Fatal("Failed to migrate database:", err)
	}

	log.Println("Database connected and migrated")
}

// GetDB provides a public accessor to the database connection.
// It will panic with a helpful message if the connection is not initialized.
func GetDB() *gorm.DB {
	if db == nil {
		log.Fatal("Database connection is not initialized. Ensure database.Connect() is called from main().")
	}
	return db
}
