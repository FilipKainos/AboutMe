# Terraform configuration for GitHub Pages deployment
# This manages the GitHub repository settings for Pages

terraform {
  required_version = ">= 1.5.0"

  required_providers {
    github = {
      source  = "integrations/github"
      version = "~> 6.0"
    }
  }

  # Backend configuration for state management
  # Uncomment and configure for remote state storage
  # backend "s3" {
  #   bucket         = "your-terraform-state-bucket"
  #   key            = "aboutme-portfolio/terraform.tfstate"
  #   region         = "eu-west-1"
  #   encrypt        = true
  #   dynamodb_table = "terraform-locks"
  # }
}

provider "github" {
  # Token is read from GITHUB_TOKEN environment variable
  owner = var.github_owner
}

variable "github_owner" {
  description = "GitHub repository owner (username or organisation)"
  type        = string
  default     = "FilipKainos"
}

variable "repository_name" {
  description = "Name of the GitHub repository"
  type        = string
  default     = "AboutMe"
}

variable "pages_branch" {
  description = "Branch to deploy GitHub Pages from"
  type        = string
  default     = "gh-pages"
}

# Data source to get repository information
data "github_repository" "portfolio" {
  full_name = "${var.github_owner}/${var.repository_name}"
}

# Configure GitHub Pages for the repository
resource "github_repository_file" "cname" {
  repository          = var.repository_name
  branch              = var.pages_branch
  file                = "CNAME"
  content             = "filipszwerluga.com"
  commit_message      = "Add CNAME for custom domain"
  overwrite_on_create = true

  # Only create if custom domain is configured
  count = 0 # Set to 1 if you have a custom domain
}

# Output useful information
output "repository_url" {
  description = "URL of the GitHub repository"
  value       = data.github_repository.portfolio.html_url
}

output "pages_url" {
  description = "URL of the GitHub Pages site"
  value       = "https://${lower(var.github_owner)}.github.io/${lower(var.repository_name)}/"
}

output "repository_full_name" {
  description = "Full name of the repository"
  value       = data.github_repository.portfolio.full_name
}
