package main

import (
	"blog-server/controllers"
	"blog-server/database"
	"blog-server/middlewares"
	"log"
	"os"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
)

func main() {
	if err := godotenv.Load(); err != nil {
		log.Println("No .env file found")
	}

	database.Connect()

	router := gin.Default()

	router.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"http://localhost:3000"},
		AllowMethods:     []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowHeaders:     []string{"Content-Type", "Authorization"},
		AllowCredentials: true,
	}))

	// Post routes
	router.GET("/posts", controllers.GetPosts)
	router.POST("/posts", controllers.CreatePost)
	router.DELETE("/posts/:id", controllers.DeletePost)

	// **Auth routes harus ada di sini**

	router.GET("/me", middlewares.AuthMiddleware(), controllers.GetProfile)
	router.PUT("/me", middlewares.AuthMiddleware(), controllers.UpdateProfile)

	router.POST("/auth/register", controllers.Register)
	router.POST("/auth/login", controllers.Login)

	router.GET("/health", func(c *gin.Context) {
		c.JSON(200, gin.H{"status": "OK"})
	})

	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}
	log.Printf("Server running on port %s", port)
	router.Run(":" + port)
}
