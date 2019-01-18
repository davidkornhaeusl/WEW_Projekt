/*    ==Skriptparameter==

    Quellserverversion : SQL Server 2016 (13.0.1742)
    Edition des Quelldatenbankmoduls : Microsoft SQL Server Enterprise Edition
    Typ des Quelldatenbankmoduls : Eigenständige SQL Server-Instanz

    Zielserverversion : SQL Server 2017
    Edition des Zieldatenbankmoduls : Microsoft SQL Server Standard Edition
    Typ des Zieldatenbankmoduls : Eigenständige SQL Server-Instanz
*/
USE [master]
GO
/****** Object:  Database [WEW_User_Management]    Script Date: 17.01.2019 22:31:47 ******/
CREATE DATABASE [WEW_User_Management]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'WEW_User_Management', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL13.MUR\MSSQL\DATA\WEW_User_Management.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'WEW_User_Management_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL13.MUR\MSSQL\DATA\WEW_User_Management_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
GO
ALTER DATABASE [WEW_User_Management] SET COMPATIBILITY_LEVEL = 130
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [WEW_User_Management].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [WEW_User_Management] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [WEW_User_Management] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [WEW_User_Management] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [WEW_User_Management] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [WEW_User_Management] SET ARITHABORT OFF 
GO
ALTER DATABASE [WEW_User_Management] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [WEW_User_Management] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [WEW_User_Management] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [WEW_User_Management] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [WEW_User_Management] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [WEW_User_Management] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [WEW_User_Management] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [WEW_User_Management] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [WEW_User_Management] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [WEW_User_Management] SET  DISABLE_BROKER 
GO
ALTER DATABASE [WEW_User_Management] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [WEW_User_Management] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [WEW_User_Management] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [WEW_User_Management] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [WEW_User_Management] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [WEW_User_Management] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [WEW_User_Management] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [WEW_User_Management] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [WEW_User_Management] SET  MULTI_USER 
GO
ALTER DATABASE [WEW_User_Management] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [WEW_User_Management] SET DB_CHAINING OFF 
GO
ALTER DATABASE [WEW_User_Management] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [WEW_User_Management] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [WEW_User_Management] SET DELAYED_DURABILITY = DISABLED 
GO
EXEC sys.sp_db_vardecimal_storage_format N'WEW_User_Management', N'ON'
GO
ALTER DATABASE [WEW_User_Management] SET QUERY_STORE = OFF
GO
USE [WEW_User_Management]
GO
ALTER DATABASE SCOPED CONFIGURATION SET LEGACY_CARDINALITY_ESTIMATION = OFF;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET LEGACY_CARDINALITY_ESTIMATION = PRIMARY;
GO
ALTER DATABASE SCOPED CONFIGURATION SET MAXDOP = 0;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET MAXDOP = PRIMARY;
GO
ALTER DATABASE SCOPED CONFIGURATION SET PARAMETER_SNIFFING = ON;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET PARAMETER_SNIFFING = PRIMARY;
GO
ALTER DATABASE SCOPED CONFIGURATION SET QUERY_OPTIMIZER_HOTFIXES = OFF;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET QUERY_OPTIMIZER_HOTFIXES = PRIMARY;
GO
USE [WEW_User_Management]
GO
/****** Object:  User [admin]    Script Date: 17.01.2019 22:31:47 ******/
CREATE USER [admin] FOR LOGIN [admin] WITH DEFAULT_SCHEMA=[dbo]
GO
/****** Object:  Table [dbo].[Users]    Script Date: 17.01.2019 22:31:47 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Users](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[FIRSTNAME] [varchar](200) NULL,
	[LASTNAME] [varchar](200) NULL,
	[GENDER] [varchar](200) NULL,
	[CITY] [varchar](200) NULL,
	[AGE] [int] NULL
) ON [PRIMARY]
GO
/****** Object:  StoredProcedure [dbo].[AddUser]    Script Date: 17.01.2019 22:31:47 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

Create procedure [dbo].[AddUser]         
(      
    @FIRSTNAME varchar(20),      
    @LASTNAME varchar(20),      
    @GENDER varchar(10),      
    @CITY varchar(30),      
    @AGE int     
)as         
Begin         
    Insert into Users (FIRSTNAME, LASTNAME, GENDER, CITY, AGE)         
    Values (@FIRSTNAME, @LASTNAME, @GENDER, @CITY, @AGE)  ;       
End
GO
/****** Object:  StoredProcedure [dbo].[DeleteUser]    Script Date: 17.01.2019 22:31:47 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE procedure [dbo].[DeleteUser]       
(        
   @ID int        
)        
as         
begin        
   Delete Users 
   Where  ID = @ID;
End
GO
/****** Object:  StoredProcedure [dbo].[GetAllUsers]    Script Date: 17.01.2019 22:31:47 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE procedure [dbo].[GetAllUsers]  
as
Begin
select *      
    from Users   
    order by 1 ;
END;
GO
/****** Object:  StoredProcedure [dbo].[UpdateUser]    Script Date: 17.01.2019 22:31:47 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE procedure [dbo].[UpdateUser]         
(      
    @ID int,
	@FIRSTNAME varchar(20),      
    @LASTNAME varchar(20),      
    @GENDER varchar(10),      
    @CITY varchar(30),      
    @AGE int     
)as         
Begin         
    Update Users 
		set FIRSTNAME = @FIRSTNAME, 
			LASTNAME = @LASTNAME, 
			GENDER = @GENDER, 
			CITY = @AGE, 
			AGE = @AGE
		Where ID = @ID ;       
End;
GO
USE [master]
GO
ALTER DATABASE [WEW_User_Management] SET  READ_WRITE 
GO
