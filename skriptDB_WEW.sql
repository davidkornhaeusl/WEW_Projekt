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
	[FIRSTNAME] [varchar](20) NOT NULL,
	[LASTNAME] [varchar](20) NOT NULL,
	[GENDER] [varchar](10) NOT NULL,
	[CITY] [varchar](30) NOT NULL,
	[AGE] [int] NOT NULL,
	[MAIL] [varchar](50) NULL,
	[CARID] [int] NULL
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
    @AGE int    ,      
    @MAIL varchar(50)  
)as         
Begin         
    Insert into Users (FIRSTNAME, LASTNAME, GENDER, CITY, AGE, MAIL)         
    Values (@FIRSTNAME, @LASTNAME, @GENDER, @CITY, @AGE, @MAIL)  ;       
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
    @AGE int,      
    @MAIL varchar(50) 
)as         
Begin         
    Update Users 
		set FIRSTNAME = @FIRSTNAME, 
			LASTNAME = @LASTNAME, 
			GENDER = @GENDER, 
			CITY = @CITY, 
			AGE = @Age,
			MAIL = @MAIL
		Where ID = @ID ;       
End
GO

/**** NEW *****/
USE [WEW_User_Management]
GO

/****** Object:  Table [dbo].[CARS]    Script Date: 28.01.2019 17:58:12 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[CARS](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Brand] [varchar](50) NULL,
	[Type] [varchar](50) NULL,
	[Year] [varchar](50) NULL,
	[Plate] [varchar](50) NULL
) ON [PRIMARY]
GO

CREATE procedure [dbo].[AddCar]         
(      
    @Brand varchar(20),      
    @Type varchar(20),      
    @Year varchar(10),      
    @Plate varchar(30)
)as         
Begin         
    Insert into CARS    
    Values (@Brand, @Type, @Year, @Plate)  ;       
End
GO

CREATE procedure [dbo].[DeleteCar]       
(        
   @ID int        
)        
as         
begin        
   Delete CARS 
   Where  ID = @ID;
End
GO

CREATE procedure [dbo].[GetAllCars]  
as
Begin
select *      
    from CARS   
    order by 1 ;
END;
GO

CREATE procedure [dbo].[UpdateCar]         
(      
    @ID int,
	@Brand varchar(20),      
    @Type varchar(20),      
    @Year varchar(10),      
    @Plate varchar(30)
)as         
Begin         
    Update CARS 
		set Brand = @Brand, 
			Type = @Type, 
			Year = @Year, 
			Plate = @Plate
		Where ID = @ID ;       
End;
GO

insert into cars values ('AUDI', 'A5', '2018', '');
insert into cars values ('BMW', '1', '2016', '');
insert into cars values ('BMW', '2', '2015', '');
insert into cars values ('BMW', '3', '2019', '');
insert into cars values ('BMW', '5', '2018', '');
insert into cars values ('AUDI', 'A4', '2015', '');
insert into cars values ('AUDI', 'A3', '2014', '');


